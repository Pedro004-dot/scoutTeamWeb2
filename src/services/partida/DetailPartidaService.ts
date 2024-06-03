import { Partida } from "@prisma/client";
import { PartidaRepository } from "../../repository/partida/PartidaRepository";

class GetPartidaDetailsService {
  private partidaRepository: PartidaRepository;

  constructor() {
    this.partidaRepository = new PartidaRepository();
  }

  async execute(id_partida: string): Promise<Partida | null> {
    return this.partidaRepository.getPartidaDetails(id_partida);
  }
}

export { GetPartidaDetailsService };