import { JogoRepository } from "../../repository/jogo/JogoRepository"
import { Jogo } from "@prisma/client";


interface UpdateJogoRequest {
  id_jogo: string;
  gols_time?: number;
  formacao_time?: string;
}

class UpdateJogoService {
  private jogoRepository: JogoRepository;

  constructor() {
    this.jogoRepository = new JogoRepository();
  }

  async execute(data: UpdateJogoRequest): Promise<Jogo> {
    const { id_jogo } = data;

    try {
      const jogo = await this.jogoRepository.updateJogo(id_jogo, data);
      return jogo;
    } catch (error) {
      console.error("Erro ao atualizar jogo:", error);
      throw new Error("Não foi possível atualizar o jogo");
    }
  }
}

export { UpdateJogoService };