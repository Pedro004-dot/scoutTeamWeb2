import prismaClient from "../../prisma";

interface CreateCommentData {
  conteudo: string;
  postId: string;
  userId: string;
}

class ComentarioRepository {
  // Método para criar um comentário
  async createComment(data: CreateCommentData) {
    const { conteudo, postId, userId } = data;

    const comment = await prismaClient.comentario.create({
      data: {
        conteudo,
        id_postagem: postId,
        id_usuario: userId,
      },
    });

    return comment;
  }

  // Método para atualizar um comentário
  async updateComment(commentId: string, conteudo: string) {
    const updatedComment = await prismaClient.comentario.update({
      where: { id_comentario: commentId },
      data: { conteudo },
    });

    return updatedComment;
  }

  // Método para remover um comentário
  async deleteComment(commentId: string) {
    await prismaClient.comentario.delete({
      where: { id_comentario: commentId },
    });
  }

  // Método para obter todos os comentários de uma postagem
  async getCommentsByPost(postId: string) {
    const comments = await prismaClient.comentario.findMany({
      where: {
        id_postagem: postId,
      },
      orderBy: {
        data_comentario: "asc",
      },
    });

    return comments;
  }

  // Método para buscar um comentário por ID
  async findCommentById(commentId: string) {
    return await prismaClient.comentario.findUnique({
      where: { id_comentario: commentId },
    });
  }
}

export { ComentarioRepository };
