import { PostRepository } from "../../repository/post/PostRepository";

class DeletePostService {
  private postRepository: PostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  async execute(postId: string, userId: string) {
    // Verifica se a postagem existe
    const post = await this.postRepository.findPostById(postId);

    if (!post) {
      throw new Error("Postagem não encontrada.");
    }

    // Verifica se o usuário tem permissão para deletar a postagem
    if (post.id_usuario !== userId) {
      throw new Error("Você não tem permissão para deletar esta postagem.");
    }

    // Chama o repository para deletar a postagem
    await this.postRepository.deletePost(postId);
  }
}

export { DeletePostService };
