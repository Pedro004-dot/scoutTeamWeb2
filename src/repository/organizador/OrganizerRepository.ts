import prismaClient from "../../prisma";
import { Organizador } from "@prisma/client";

class OrganizerRepository {
  async createOrganizer(data: Omit<Organizador, 'id_organizador'>): Promise<Organizador> {
    return prismaClient.organizador.create({ data });
  }

  async findOrganizerById(id_usuario: string): Promise<Organizador | null> {
    return prismaClient.organizador.findFirst({ where: { id_usuario } });
  }

  async updateOrganizer(id: string, data: Partial<Organizador>): Promise<Organizador> {
    return prismaClient.organizador.update({ where: { id_organizador: id }, data });
  }

  async deleteOrganizer(id: string): Promise<Organizador> {
    return prismaClient.organizador.delete({ where: { id_organizador: id } });
  }
}

export { OrganizerRepository };
