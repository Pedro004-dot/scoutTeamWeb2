
import { Competicao } from "@prisma/client";
import { CompetitionRepository } from "../../repository/competicao/Competicao";
import { OrganizerRepository } from "../../repository/organizador/OrganizerRepository";
import { TimeRepository } from "../../repository/time/TeamRepository";

interface CompetitionRequest {
  id_usuario: string; 
  nome_campeonato: string;
  regulamento: string;
  data_inicio: Date;
  data_fim: Date;
  formato_campeonato: string;
  quantidade_times: string;
  orgao_publico: boolean;
  times_ids: string[]; 
}
class CreateCompetitionService {
  private competitionRepository: CompetitionRepository;
  private organizerRepository: OrganizerRepository;
  private teamRepository: TimeRepository;

  constructor() {
    this.competitionRepository = new CompetitionRepository();
    this.organizerRepository = new OrganizerRepository();
    this.teamRepository = new TimeRepository();
  }

  async execute(data: CompetitionRequest): Promise<Competicao> {
    const { id_usuario, nome_campeonato, regulamento, data_inicio, data_fim, formato_campeonato, quantidade_times, orgao_publico, times_ids } = data;

    // Verificação do Organizador
    const organizer = await this.organizerRepository.findOrganizerByUserId(id_usuario);
    if (!organizer) {
      throw new Error("Organizador não encontrado.");
    }

    if (!Array.isArray(times_ids) || times_ids.length === 0) {
      throw new Error("Times deve ser um array com pelo menos um time.");
    }

    // Regra 1: Limite de Criação de Competições por Organizador
    const competitions = await this.competitionRepository.findCompetitionsByOrganizer(id_usuario);
    if (competitions.length >= 5) {
      throw new Error("Um organizador pode criar no máximo 5 competições.");
    }

    // Regra 2: Validação de Times Cadastrados
    const validTeams = await Promise.all(times_ids.map(async (teamId) => {
      const team = await this.teamRepository.findTimeById(teamId);
      return team !== null;
    }));
    if (validTeams.includes(false)) {
      throw new Error("Todos os times devem estar cadastrados.");
    }

    // Regra 3: Datas de Início e Fim da Competição
    if (data_inicio >= data_fim) {
      throw new Error("A data de início deve ser anterior à data de término.");
    }
    const overlappingCompetitions = competitions.filter(comp => 
      (data_inicio < comp.data_fim && data_fim > comp.data_inicio)
    );
    if (overlappingCompetitions.length > 0) {
      throw new Error("A data da competição não pode sobrepor outra competição do mesmo organizador.");
    }

    // Regra 4: Número Mínimo e Máximo de Times por Competição
    if (times_ids.length < 1 || times_ids.length > 20) {
      throw new Error("Uma competição deve ter no mínimo 4 times e no máximo 20 times.");
    }

    // Regra 5: Verificação de Competições Duplicadas
    const existingCompetition = await this.competitionRepository.findCompetitionByNameAndOrganizer(nome_campeonato, id_usuario);
    if (existingCompetition) {
      throw new Error("Não pode haver competições com o mesmo nome para o mesmo organizador.");
    }

    try {
      const competition = await this.competitionRepository.createCompetition({
        id_usuario,
        nome_campeonato,
        regulamento,
        data_inicio,
        data_fim,
        formato_campeonato,
        quantidade_times,
        orgao_publico,
        times_ids
      });

      return competition;
    } catch (error) {
      console.error("Erro ao criar competição:", error); // Log de erro
      throw new Error("Não foi possível criar a competição");
    }
  }
}

export { CreateCompetitionService };