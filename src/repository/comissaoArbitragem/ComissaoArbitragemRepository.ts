import { ComissaoArbitragem } from "@prisma/client";
import prismaClient from "../../prisma";

class ComissaoArbitragemRepository {
  async createComissaoArbitragem(data: { id_partida: string; id_arbitro: string }): Promise<ComissaoArbitragem> {
    return prismaClient.comissaoArbitragem.create({
      data: {
        id_partida: data.id_partida,
        id_arbitro: data.id_arbitro,
      },
    });
  }

  async findComissaoArbitragemByPartidaId(id_partida: string): Promise<ComissaoArbitragem[]> {
    return prismaClient.comissaoArbitragem.findMany({ where: { id_partida } });
  }

  async deleteComissaoArbitragem(id_partida: string, id_arbitro: string): Promise<ComissaoArbitragem> {
    return prismaClient.comissaoArbitragem.delete({
      where: {
        id_partida_id_arbitro: {
          id_partida,
          id_arbitro,
        },
      },
    });
  }
}

export { ComissaoArbitragemRepository };
