import { EscalacaoTime } from "@prisma/client";
import prismaClient from "../../prisma";

class EscalacaoRepository {
  async createEscalacao(data: Omit<EscalacaoTime, 'id_escalacao'>): Promise<EscalacaoTime> {
    return prismaClient.escalacaoTime.create({
      data,
    });
  }

  async findEscalacaoById(id_escalacao: string): Promise<EscalacaoTime | null> {
    return prismaClient.escalacaoTime.findUnique({
      where: { id_escalacao },
    });
  }

  async updateEscalacao(id: string, data: Partial<EscalacaoTime>): Promise<EscalacaoTime> {
    return prismaClient.escalacaoTime.update({
      where: { id_escalacao: id },
      data,
    });
  }

  async deleteEscalacao(id: string): Promise<EscalacaoTime> {
    return prismaClient.escalacaoTime.delete({
      where: { id_escalacao: id },
    });
  }
}

export { EscalacaoRepository };
