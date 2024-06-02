import { Estadio } from "@prisma/client";
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
  
    constructor() {
      this.estadioRepository = new EstadioRepository();
    }
  
    async execute(data: EstadioRequest): Promise<Estadio> {
      try {
        const estadio = await this.estadioRepository.createEstadio(data);
        return estadio;
      } catch (error) {
        console.error("Erro ao criar estádio:", error);
        throw new Error("Não foi possível criar o estádio");
      }
    }
  }
  
  export { CreateEstadioService };