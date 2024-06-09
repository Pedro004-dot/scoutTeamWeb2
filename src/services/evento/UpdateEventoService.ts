import { EventoRepository } from "../../repository/evento/EventoRepository";
import { Evento } from "@prisma/client";

interface UpdateEventoRequest {
  id_evento: string;
  tipo_evento?: string;
  minuto_jogo?: number;
  id_atleta?: string;
  id_partida?: string;
  id_time?: string;
}

class UpdateEventoService {
  private eventoRepository: EventoRepository;

  constructor() {
    this.eventoRepository = new EventoRepository();
  }

  async execute(eventoData: UpdateEventoRequest): Promise<Evento | null> {
    const { id_evento, tipo_evento, minuto_jogo, id_atleta, id_partida, id_time } = eventoData;

    // Verificação se o evento existe
    const eventoExists = await this.eventoRepository.findEventoById(id_evento);
    if (!eventoExists) {
      throw new Error("Evento não existe");
    }

    // Verificações adicionais se necessário

    try {
      const evento = await this.eventoRepository.updateEvento(id_evento, {
        tipo_evento,
        minuto_jogo,
        id_atleta,
        id_partida,
        id_time
      });

      return evento;
    } catch (error) {
      throw new Error("Não foi possível atualizar o evento");
    }
  }
}

export { UpdateEventoService };
