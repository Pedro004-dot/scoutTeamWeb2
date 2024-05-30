import { Atleta } from "@prisma/client";
import { AtletaRepository } from "../../repository/atleta/AtletaRepository";

interface AtletaRequest {
  id_usuario: string;
  id_time: string;
  id_empresario: string;
  altura: number;
  peso: number;
  score: number;
  caracteristicasJogo: string[];
  posicoes: string[];
}

class CreateAtletaService {
  private atletaRepository: AtletaRepository;

  constructor() {
    this.atletaRepository = new AtletaRepository();
  }

  async execute(atletaData: AtletaRequest): Promise<Atleta> {
    const { id_usuario, id_time, id_empresario, altura, peso, score, caracteristicasJogo, posicoes } = atletaData;

    try {
      const atleta = await this.atletaRepository.createAtleta({
        id_usuario,
        id_time,
        id_empresario,
        altura,
        peso,
        score,
        caracteristicasJogo,
        posicoes
      });
      return atleta;
    } catch (error) {
      console.error("Erro ao criar atleta:", error); 
      throw new Error("Não foi possível criar o atleta");
    }
  }
}

export { CreateAtletaService };
