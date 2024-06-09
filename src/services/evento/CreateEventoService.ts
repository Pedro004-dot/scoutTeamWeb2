import { EventoRepository } from "../../repository/evento/EventoRepository";
import { Evento, PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

interface EventoRequest {
  tipo_evento: string;
  minuto_jogo: number;
  id_atleta: string;
  id_partida: string;
  id_time: string;
}

class CreateEventoService {
  private eventoRepository: EventoRepository;

  constructor() {
    this.eventoRepository = new EventoRepository();
  }

  async execute(eventoData: EventoRequest): Promise<Evento> {
    const { tipo_evento, minuto_jogo, id_atleta, id_partida, id_time } = eventoData;

    // Verificação se o time existe
    const teamExists = await prismaClient.time.findUnique({
      where: { id_time }
    });
    if (!teamExists) {
      throw new Error("Time não existe");
    }

    // Verificação se o atleta existe
    const athleteExists = await prismaClient.atleta.findUnique({
      where: { id_atleta }
    });
    if (!athleteExists) {
      throw new Error("Atleta não existe");
    }

    // Verificação se a partida existe
    const partidaExists = await prismaClient.partida.findUnique({
      where: { id_partida }
    });
    if (!partidaExists) {
      throw new Error("Partida não existe");
    }

    try {
      const evento = await this.eventoRepository.createEvento({
        tipo_evento,
        minuto_jogo,
        id_atleta,
        id_partida,
        id_time
      });

      return evento;
    } catch (error) {
      throw new Error("Não foi possível criar o evento");
    }
  }
}

export { CreateEventoService };
