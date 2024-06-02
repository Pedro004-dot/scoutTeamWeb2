import { Estadio } from "@prisma/client";
import { EstadioRepository } from "../../repository/estadio/EstadioRepository";

interface UpdateEstadioRequest {
  id_estadio: string;
  nome?: string;
  cidade_endereco?: string;
  estado_endereco?: string;
  capacidade?: number;
  tipo_gramado?: string;
  id_time?: string;
}

class UpdateEstadioService {
  private estadioRepository: EstadioRepository;

  constructor() {
    this.estadioRepository = new EstadioRepository();
  }

  async execute(data: UpdateEstadioRequest): Promise<Estadio> {
    const { id_estadio } = data;

    try {
      const estadio = await this.estadioRepository.updateEstadio(id_estadio, data);
      return estadio;
    } catch (error) {
      console.error("Erro ao atualizar estádio:", error);
      throw new Error("Não foi possível atualizar o estádio");
    }
  }
}

export { UpdateEstadioService };
