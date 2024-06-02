
import { Competicao } from "@prisma/client";
import { CompetitionRepository } from "../../repository/competicao/Competicao";
import { OrganizerRepository } from "../../repository/organizador/OrganizerRepository";
import { TimeRepository } from "../../repository/time/TeamRepository";

interface UpdateCompetitionRequest {
    id_competicao: string;
    nome_campeonato?: string;
    regulamento?: string;
    data_inicio?: Date;
    data_fim?: Date;
    formato_campeonato?: string;
    quantidade_times?: string;
    orgao_publico?: boolean;
    times_ids?: string[];
  }
  class UpdateCompetitionService {
    private competitionRepository: CompetitionRepository;
    private organizerRepository: OrganizerRepository;
    private teamRepository: TimeRepository;
  
    constructor() {
      this.competitionRepository = new CompetitionRepository();
      this.organizerRepository = new OrganizerRepository();
      this.teamRepository = new TimeRepository();
    }
    async execute(data: UpdateCompetitionRequest): Promise<Competicao> {
        const { id_competicao, times_ids } = data;
    
        if (times_ids) {
          // Verificação de Times
          const validTeams = await Promise.all(times_ids.map(async (teamId) => {
            const team = await this.teamRepository.findTimeById(teamId);
            return team !== null;
          }));
          if (validTeams.includes(false)) {
            throw new Error("Todos os times devem estar cadastrados.");
          }
        }
    
        try {
          const updatedCompetition = await this.competitionRepository.updateCompetition(data);
          return updatedCompetition;
        } catch (error) {
          console.error("Erro ao atualizar competição:", error);
          throw new Error("Não foi possível atualizar a competição");
        }
      }
  }
  export { UpdateCompetitionService };