import prismaClient from "../../prisma";
import { Competicao } from "@prisma/client";


class CompetitionRepository {
  async findCompetitionsByOrganizer(id_usuario: string): Promise<Competicao[]> {
    return prismaClient.competicao.findMany({ where: { id_usuario } });
  }

  async findCompetitionByNameAndOrganizer(nome_campeonato: string, id_usuario: string): Promise<Competicao | null> {
    return prismaClient.competicao.findFirst({
      where: {
        nome_campeonato,
        id_usuario
      }
    });
  }
  // async listCompetitions(): Promise<Competicao[]> {
  //   return prismaClient.competicao.findMany();
  // }

  async createCompetition(data: Omit<Competicao, 'id_competicao'> & { times_ids: string[] }): Promise<Competicao> {
    return prismaClient.competicao.create({
      data
    });
  }

  async updateCompetition(data: Partial<Competicao> & { id_competicao: string }): Promise<Competicao> {
    const { id_competicao, ...updateData } = data;
    return prismaClient.competicao.update({
      where: { id_competicao },
      data: updateData
    });
  }

  async getCompetitionDetail(id_competicao: string): Promise<Competicao | null> {
    return prismaClient.competicao.findFirst({
      where: { id_competicao },
    });
  }


  async deleteCompetition(id_competicao: string): Promise<void> {
    await prismaClient.competicao.delete({
      where: { id_competicao }
    });
   
  }
}


export { CompetitionRepository };

