import prismaClient from "../../prisma";
import { Usuario } from "@prisma/client";

class UserRepository {
  async createUser(data: Omit<Usuario, 'id_usuario'>): Promise<Usuario> {
    return prismaClient.usuario.create({ data });
  }

  async findUserByEmail(email: string): Promise<Usuario | null> {
    return prismaClient.usuario.findUnique({  where:{
      email: email
  },
  include:{
      Pessoa:true
  } });
  }

  async findUserById(id_usuario: string): Promise<Usuario | null> {
    return prismaClient.usuario.findUnique({
      where: { id_usuario },
    });
  }
  
  async updateUser(userId: string, data: Partial<Usuario>): Promise<Usuario> {
    return prismaClient.usuario.update({
      where: { id_usuario: userId },
      data,
    })};

  async deleteUser(userId:string): Promise<Usuario>{
    return prismaClient.usuario.delete({
      where: { id_usuario: userId }
    })
  }
}

export { UserRepository };
