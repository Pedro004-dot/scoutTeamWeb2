import { EstadioRepository } from "../../repository/estadio/EstadioRepository";

class DeleteEstadioService {
  private estadioRepository: EstadioRepository;

  constructor() {
    this.estadioRepository = new EstadioRepository();
  }

  async execute(id_estadio: string): Promise<void> {
    try {
      await this.estadioRepository.deleteEstadio(id_estadio);
    } catch (error) {
      console.error("Erro ao excluir estádio:", error);
      throw new Error("Não foi possível excluir o estádio");
    }
  }
}

export { DeleteEstadioService };
