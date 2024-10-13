import { Partida } from "@prisma/client";
import { PartidaRepository } from "../../repository/partida/PartidaRepository";
import { EstadioRepository } from "../../repository/estadio/EstadioRepository";
import { CompetitionRepository } from "../../repository/competicao/CompeticaoRepository";
import { JogoRepository } from "../../repository/jogo/JogoRepository";
import { ArbitroRepository } from "../../repository/arbitro/ArbitroRepository";
import { TimeRepository } from "../../repository/time/TeamRepository";

interface PartidaRequest {
  dia_jogo: Date;
  id_estadio: string;
  id_competicao: string;
  sumula: string;
  id_arbitros: string[];
  times_ids: string [];
}

class CreatePartidaService {
  private teamRepository: TimeRepository
  private partidaRepository: PartidaRepository;
  private estadioRepository: EstadioRepository;
  private competitionRepository: CompetitionRepository;
  private jogoRepository: JogoRepository;
  private arbitroRepository: ArbitroRepository;

  constructor() {
    this.teamRepository = new TimeRepository();
    this.partidaRepository = new PartidaRepository();
    this.estadioRepository = new EstadioRepository();
    this.competitionRepository = new CompetitionRepository();
    this.jogoRepository = new JogoRepository();
    this.arbitroRepository = new ArbitroRepository();
  }

  async execute(data: PartidaRequest): Promise<Partida> {
    const { times_ids,dia_jogo, id_estadio, id_competicao, sumula,id_arbitros } = data;

    // Verifique se o estádio existe
    const estadioExists = await this.estadioRepository.getEstadioById(id_estadio);
    if (!estadioExists) {
      throw new Error("Estádio não encontrado");
    }

    // Verifique se a competição existe
    const competicaoExists = await this.competitionRepository.getCompetitionDetail(id_competicao);
    if (!competicaoExists) {
      throw new Error("Competição não encontrada");
    }
    for (const id_arbitro of id_arbitros) {
      const arbitroExists = await this.arbitroRepository.findArbitroById(id_arbitro);
      if (!arbitroExists) {
        throw new Error(`Árbitro com ID ${id_arbitro} não encontrado`);
      }
    }
    const validTeams = await Promise.all(times_ids.map(async (teamId) => {
      const team = await this.teamRepository.findTeamByUserId(teamId);
      return team !== null;
    }));
    if (validTeams.includes(false)) {
      throw new Error("Todos os times devem estar cadastrados.");
    }


    try {
      const partida = await this.partidaRepository.createPartida({
        times_ids,
        dia_jogo,
        id_estadio,
        id_competicao,
        sumula,
        Arbitros: {
          create: id_arbitros.map((id) => ({
            id_arbitro: id
          }))
        }
      });
      return partida;
    } catch (error) {
      console.error("Erro ao criar partida:", error);
      throw new Error("Não foi possível criar a partida");
    }
  }
}

export { CreatePartidaService };
