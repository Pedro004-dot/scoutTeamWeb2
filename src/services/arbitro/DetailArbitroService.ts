import { Arbitro } from "@prisma/client";
import { ArbitroRepository } from "../../repository/arbitro/ArbitroRepository";

class DetailArbitroService {
  private arbitroRepository: ArbitroRepository;

  constructor() {
    this.arbitroRepository = new ArbitroRepository();
  }

  async execute(id_arbitro: string): Promise<Arbitro | null> {
    const arbitro = await this.arbitroRepository.findArbitroById(id_arbitro);
    if (!arbitro) {
      throw new Error("Árbitro não encontrado");
    }
    return arbitro;
  }
}

export { DetailArbitroService };
