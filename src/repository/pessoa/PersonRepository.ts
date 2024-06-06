import prismaClient from "../../prisma";
import { Pessoa } from "@prisma/client";

class PersonRepository {
  async createPerson(data: Omit<Pessoa, 'id_pessoa'>): Promise<Pessoa> {
    return prismaClient.pessoa.create({ data });
  }

  async findPersonByUserId(userId: string): Promise<Pessoa | null> {
    return prismaClient.pessoa.findUnique({
      where: { id_usuario: userId },
      include:{
        Usuario: true
      }
    });
  }

  async updatePerson(userId: string, data: Partial<Pessoa>): Promise<Pessoa> {
    return prismaClient.pessoa.update({
      where: { id_usuario: userId },
      data,
    });
  }

  async deletePersonByUserId(userId: string): Promise<Pessoa> {
    return prismaClient.pessoa.delete({
      where: { id_usuario: userId },
    });
  }
  
}

export { PersonRepository };
