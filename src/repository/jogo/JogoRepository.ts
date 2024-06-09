import {Jogo} from "@prisma/client"
import prismaClient from "../../prisma";

class JogoRepository {
  async createJogo(data: Omit<Jogo, 'id_jogo'>): Promise<Jogo> {
    return prismaClient.jogo.create({
      data
    });
  }

  async getJogoById(id_jogo: string): Promise<Jogo | null> {
    return prismaClient.jogo.findFirst({
      where: { id_jogo }
    });
  }

  async updateJogo(id_jogo: string, data: Partial<Jogo>): Promise<Jogo> {
    return prismaClient.jogo.update({
      where: { id_jogo },
      data
    });
  }

  async deleteJogo(id_jogo: string): Promise<void> {
    await prismaClient.jogo.delete({
      where: { id_jogo }
    });
  }
  async getJogosByPartidaId(id_partida: string): Promise<Jogo[]> {
    return prismaClient.jogo.findMany({
      where: { id_partida },
      include: {
        Time: true,
      }
    });
  }
  async getEscalacaoByJogos(id_jogo: string): Promise<Jogo | null> {
    return prismaClient.jogo.findFirst({
      where: { id_jogo }
    });
  }
}

export { JogoRepository };