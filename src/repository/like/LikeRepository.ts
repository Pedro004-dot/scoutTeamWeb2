import prismaClient from "../../prisma";

class LikeRepository {
  // Adiciona uma curtida a uma postagem
  async addLike(postId: string, userId: string) {
    const like = await prismaClient.curtida.create({
      data: {
        id_postagem: postId,
        id_usuario: userId,
      },
    });
    return like;
  }

  // Remove uma curtida de uma postagem
  async removeLike(postId: string, userId: string) {
    await prismaClient.curtida.deleteMany({
      where: {
        id_postagem: postId,
        id_usuario: userId,
      },
    });
  }

  // Verifica se a curtida já existe
  async findLike(postId: string, userId: string) {
    return await prismaClient.curtida.findFirst({
      where: {
        id_postagem: postId,
        id_usuario: userId,
      },
    });
  }
}

export { LikeRepository };