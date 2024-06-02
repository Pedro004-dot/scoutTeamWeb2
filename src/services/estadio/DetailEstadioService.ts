import { Estadio } from "@prisma/client";
import { EstadioRepository } from "../../repository/estadio/EstadioRepository";

class GetEstadioService {
  private estadioRepository: EstadioRepository;

  constructor() {
    this.estadioRepository = new EstadioRepository();
  }

  async execute(id_estadio: string): Promise<Estadio | null> {
    return this.estadioRepository.getEstadioById(id_estadio);
  }
}

export { GetEstadioService };