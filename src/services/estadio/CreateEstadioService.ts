import { Estadio } from "@prisma/client";
import { TimeRepository } from "../../repository/time/TeamRepository";
import { EstadioRepository } from "../../repository/estadio/EstadioRepository";


interface EstadioRequest {
  nome: string;
  cidade_endereco: string;
  estado_endereco: string;
  capacidade: number;
  tipo_gramado: string;
  id_time: string;
}

class CreateEstadioService {
  private estadioRepository: EstadioRepository;
  private timeRepository: TimeRepository;

  constructor() {
    this.estadioRepository = new EstadioRepository();
    this.timeRepository = new TimeRepository();
  }

  async execute(estadioData: EstadioRequest): Promise<Estadio> {
    const { id_time } = estadioData;

    // Verifica se o time existe
    const timeExists = await this.timeRepository.findTeamById(id_time);
    if (!timeExists) {
      throw new Error("Time não existe");
    }

    // Cria o estádio
    return this.estadioRepository.createEstadio(estadioData);
  }
}

export { CreateEstadioService };
