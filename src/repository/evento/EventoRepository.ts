import { PrismaClient, Evento } from "@prisma/client";

const prismaClient = new PrismaClient();

class EventoRepository {
  async createEvento(data: Omit<Evento, 'id_evento'>): Promise<Evento> {
    return prismaClient.evento.create({
      data: {
        ...data
      }
    });
  }

  async findEventoById(id_evento: string): Promise<Evento | null> {
    return prismaClient.evento.findUnique({
      where: {
        id_evento
      }
    });
  }

  async findEventosByAtleta(id_atleta: string): Promise<Evento[]> {
    return prismaClient.evento.findMany({
      where: {
        id_atleta
      }
    });
  }

  async findEventosByPartida(id_partida: string): Promise<Evento[]> {
    return prismaClient.evento.findMany({
      where: {
        id_partida
      }
    });
  }

  async findEventosByTime(id_time: string): Promise<Evento[]> {
    return prismaClient.evento.findMany({
      where: {
        id_time
      }
    });
  }

  async updateEvento(id: string, data: Partial<Evento>): Promise<Evento | null> {
    return prismaClient.evento.update({
      where: {
        id_evento: id
      },
      data
    });
  }

  async deleteEvento(id: string): Promise<Evento> {
    return prismaClient.evento.delete({
      where: {
        id_evento: id
      }
    });
  }

  async getTotalGolsByAtleta(id_atleta: string): Promise<number> {
    const count = await prismaClient.evento.count({
      where: {
        id_atleta: id_atleta,
        tipo_evento: "Gol"
      }
    });
    return count;
  }
}

export { EventoRepository };
