import { Jogo } from "@prisma/client";
import { JogoRepository } from "../../repository/jogo/JogoRepository";
import { PartidaRepository } from "../../repository/partida/PartidaRepository";
import { TimeRepository } from "../../repository/time/TeamRepository";


interface JogoRequest {
  id_partida: string;
  id_usuario: string;
  gols_time: number;
  formacao_time: string;
}

class CreateJogoService {
  private jogoRepository: JogoRepository;
  private partidaRepository: PartidaRepository;
  private timeRepository: TimeRepository;

  constructor() {
    this.jogoRepository = new JogoRepository();
    this.partidaRepository = new PartidaRepository();
    this.timeRepository = new TimeRepository();
  }

  async execute(data: JogoRequest): Promise<Jogo> {
    const { id_partida, id_usuario, gols_time, formacao_time } = data;

    // Verifique se a partida existe
    const partidaExists = await this.partidaRepository.getPartidaById(id_partida);
    if (!partidaExists) {
      throw new Error("Partida não encontrada");
    } 

    // Verifique se o time existe
    const timeExists = await this.timeRepository.findTeamByUserId(id_usuario);
    if (!timeExists) {
      throw new Error("Time não encontrado");
    }

    try {
      const jogo = await this.jogoRepository.createJogo({ id_partida, id_time:timeExists.id_time, gols_time, formacao_time });
      return jogo;
    } catch (error) {
      console.error("Erro ao criar jogo:", error);
      throw new Error("Não foi possível criar o jogo");
    }
  }
}

export { CreateJogoService };
