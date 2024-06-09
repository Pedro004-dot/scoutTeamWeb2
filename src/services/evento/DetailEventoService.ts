import { EventoRepository } from "../../repository/evento/EventoRepository";
import { Evento } from "@prisma/client";

class GetEventoService {
  private eventoRepository: EventoRepository;

  constructor() {
    this.eventoRepository = new EventoRepository();
  }

  async execute(id_evento: string): Promise<Evento | null> {
    return await this.eventoRepository.findEventoById(id_evento);
  }

  async getEventosByAtleta(id_atleta: string): Promise<Evento[]> {
    return await this.eventoRepository.findEventosByAtleta(id_atleta);
  }

  async getEventosByPartida(id_partida: string): Promise<Evento[]> {
    return await this.eventoRepository.findEventosByPartida(id_partida);
  }

  async getEventosByTime(id_time: string): Promise<Evento[]> {
    return await this.eventoRepository.findEventosByTime(id_time);
  }
}

export { GetEventoService };
