import { Partida } from "@prisma/client";
import { PartidaRepository } from "../../repository/partida/PartidaRepository";

interface UpdatePartidaRequest {
  id_partida: string;
  dia_jogo?: Date;
  id_estadio?: string;
  id_competicao?: string;
  id_jogo?: string;
  sumula?: string;
}

class UpdatePartidaService {
  private partidaRepository: PartidaRepository;

  constructor() {
    this.partidaRepository = new PartidaRepository();
  }

  async execute(data: UpdatePartidaRequest): Promise<Partida> {
    const { id_partida } = data;

    try {
      const partida = await this.partidaRepository.updatePartida(id_partida, data);
      return partida;
    } catch (error) {
      console.error("Erro ao atualizar partida:", error);
      throw new Error("Não foi possível atualizar a partida");
    }
  }
}

export { UpdatePartidaService };
