import { TipoPostagem } from "@prisma/client";
import prismaClient from "../../prisma";

interface CreatePostData {
  conteudo: string;
  midia?: string[];
  tipo: TipoPostagem;
  userId: string;
}

class PostRepository {
  // Método para criar uma postagem
  async createPost(data: CreatePostData) {
    const { conteudo, midia, tipo, userId } = data;

    const post = await prismaClient.postagem.create({
      data: {
        conteudo,
        midia,
        tipo,
        id_usuario: userId,
      },
    });

    return post;
  }

  // Método para pegar as postagens de um usuário
  async getPostsByUser(userId: string) {
    const posts = await prismaClient.postagem.findMany({
      where: {
        id_usuario: userId,
      },
      orderBy: {
        data_criacao: 'desc',
      },
    });

    return posts;
  }

  // Método para encontrar uma postagem específica pelo ID
  async findPostById(postId: string) {
    const post = await prismaClient.postagem.findUnique({
      where: { id_postagem: postId },
    });

    return post;
  }

  // Método para atualizar uma postagem
  async updatePost(postId: string, conteudo: string, midia?: string[], tipo?: TipoPostagem) {
    const updatedPost = await prismaClient.postagem.update({
      where: { id_postagem: postId },
      data: {
        conteudo,
        midia,
        tipo,
      },
    });

    return updatedPost;
  }

  // Método para deletar uma postagem
  async deletePost(postId: string) {
    await prismaClient.postagem.delete({
      where: { id_postagem: postId },
    });
  }
}

export { PostRepository };
