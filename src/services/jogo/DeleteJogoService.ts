import { JogoRepository } from "../../repository/jogo/JogoRepository"

class DeleteJogoService {
  private jogoRepository: JogoRepository;

  constructor() {
    this.jogoRepository = new JogoRepository();
  }

  async execute(id_jogo: string): Promise<void> {
    try {
      await this.jogoRepository.deleteJogo(id_jogo);
    } catch (error) {
      console.error("Erro ao excluir jogo:", error);
      throw new Error("Não foi possível excluir o jogo");
    }
  }
}

export { DeleteJogoService };
