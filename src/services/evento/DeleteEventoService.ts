import { EventoRepository } from "../../repository/evento/EventoRepository";
import { Evento } from "@prisma/client";

class DeleteEventoService {
  private eventoRepository: EventoRepository;

  constructor() {
    this.eventoRepository = new EventoRepository();
  }

  async execute(id_evento: string): Promise<Evento> {
    // Verificação se o evento existe
    const eventoExists = await this.eventoRepository.findEventoById(id_evento);
    if (!eventoExists) {
      throw new Error("Evento não existe");
    }

    try {
      return await this.eventoRepository.deleteEvento(id_evento);
    } catch (error) {
      throw new Error("Não foi possível deletar o evento");
    }
  }
}

export { DeleteEventoService };
