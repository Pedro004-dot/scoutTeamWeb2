import { PartidaRepository } from "../../repository/partida/PartidaRepository";

class DeletePartidaService {
  private partidaRepository: PartidaRepository;

  constructor() {
    this.partidaRepository = new PartidaRepository();
  }

  async execute(id_partida: string): Promise<void> {
    try {
      await this.partidaRepository.deletePartida(id_partida);
    } catch (error) {
      console.error("Erro ao excluir partida:", error);
      throw new Error("Não foi possível excluir a partida");
    }
  }
}

export { DeletePartidaService };
