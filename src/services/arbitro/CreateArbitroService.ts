import { Arbitro } from "@prisma/client";
import { ArbitroRepository } from "../../repository/arbitro/ArbitroRepository";

interface ArbitroRequest {
  nome: string;
  tipo_arbitragem: string;
}

class CreateArbitroService {
  private arbitroRepository: ArbitroRepository;

  constructor() {
    this.arbitroRepository = new ArbitroRepository();
  }

  async execute({ nome, tipo_arbitragem }: ArbitroRequest): Promise<Arbitro> {
    const arbitroAlreadyExists = await this.arbitroRepository.findArbitroById(nome);
    if (arbitroAlreadyExists) {
      throw new Error("Árbitro já existe!");
    }

    try {
      const arbitro = await this.arbitroRepository.createArbitro({
        nome,
        tipo_arbitragem
      });
      return arbitro;
    } catch (error) {
      console.error("Erro ao criar árbitro:", error);
      throw new Error("Não foi possível criar o árbitro");
    }
  }
}

export { CreateArbitroService };
