import { Jogo } from "@prisma/client";
import { JogoRepository } from "../../repository/jogo/JogoRepository"

class GetEscalacaoByJogo {
  private jogoRepository: JogoRepository;

  constructor() {
    this.jogoRepository = new JogoRepository();
  }

  async execute(id_jogo: string): Promise<Jogo | null> {
    return this.jogoRepository.getEscalacaoByJogos(id_jogo);
  }
}

export { GetEscalacaoByJogo };
