import prismaClient from "../../prisma";

interface SalvarPostPostData {
  postId: string;
  userId: string;
}

class SalvarPostRepository {
  // Método para criar uma postagem
  async createPostSalvo(data: SalvarPostPostData) {
    const { postId, userId } = data;

    const post = await prismaClient.postagemSalva.create({
      data: {
        id_postagem:postId,
        id_usuario: userId,
      },
    });

    return post;
  }

  // Método para pegar as postagens de um usuário
  async getPostsSalvoByUser(userId: string) {
    const posts = await prismaClient.postagemSalva.findMany({
      where: {
        id_usuario: userId,
      },
      orderBy: {
        data_salvamento: 'desc',
      },
    });

    return posts;
  }
  async getPostsSalvoByPost(postId: string) {
    const posts = await prismaClient.postagemSalva.findMany({
      where: {
        id_postagem: postId,
      },
      orderBy: {
        data_salvamento: 'desc',
      },
    });

    return posts;
  }

  

  // Método para deletar uma postagem
  async deletePostSalvo(postSalvoId: string) {
    await prismaClient.postagemSalva.delete({
      where: { id_postagem_salva: postSalvoId },
    });
  }
}

export { SalvarPostRepository };
