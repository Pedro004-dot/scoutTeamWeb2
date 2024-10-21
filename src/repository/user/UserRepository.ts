import prismaClient from "../../prisma";
import { Usuario } from "@prisma/client";

class UserRepository {
  // Criação de um novo usuário
  async createUser(data: Omit<Usuario, 'id_usuario'>): Promise<Usuario> {
    return prismaClient.usuario.create({ data });
  }

  // Busca por e-mail
  async findUserByEmail(email: string): Promise<Usuario | null> {
    return prismaClient.usuario.findUnique({
      where: { email }
    });
  }

  // Busca por nome de usuário
  async findUserByUserName(nome_usuario: string): Promise<Usuario | null> {
    return prismaClient.usuario.findUnique({
      where: { nome_usuario }
    });
  }

  // Busca por ID
  async findUserById(id_usuario: string): Promise<Usuario | null> {
    return prismaClient.usuario.findUnique({
      where: { id_usuario }
    });
  }

  // Atualização de um usuário
  async updateUser(userId: string, data: Partial<Usuario>): Promise<Usuario> {
    return prismaClient.usuario.update({
      where: { id_usuario: userId },
      data,
    });
  }

  // Deleção de um usuário
  async deleteUser(userId: string): Promise<Usuario> {
    return prismaClient.usuario.delete({
      where: { id_usuario: userId }
    });
  }
}

export { UserRepository };
