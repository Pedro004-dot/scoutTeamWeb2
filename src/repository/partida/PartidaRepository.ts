import prismaClient from "../../prisma";
import { Partida } from "@prisma/client";

class PartidaRepository {
  async createPartida(data: Omit<Partida, 'id_partida'> & { Arbitros: { create: { id_arbitro: string }[] } }): Promise<Partida> {
    return prismaClient.partida.create({
      data: {
        ...data,
        Arbitros: data.Arbitros
      }
    });
  }


  async getPartidaById(id_partida: string): Promise<Partida | null> {
    return prismaClient.partida.findFirst({
      where: { id_partida },
      include:{

      }
    });
  }

  async getPartidaDetails(id_partida: string): Promise<Partida | null> {
    return prismaClient.partida.findFirst({
      where: { id_partida },
      include: {
        Estadio: true,
        Competicao: true,
        Arbitros: true
      }
    });
  }

  async updatePartida(id_partida: string, data: Partial<Partida>): Promise<Partida> {
    return prismaClient.partida.update({
      where: { id_partida },
      data
    });
  }

  async deletePartida(id_partida: string): Promise<void> {
    await prismaClient.partida.delete({
      where: { id_partida }
    });
  }
}

export { PartidaRepository };
