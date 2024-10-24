import { PostRepository } from "../../repository/post/PostRepository";

interface UpdatePostRequest {
  postId: string;
  conteudo: string;
  midia?: string[];
  tipo: string;
  userId: string;
}

class UpdatePostService {
  private postRepository: PostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  async execute({ postId, conteudo, midia, tipo, userId }: UpdatePostRequest) {
    // Verifica se a postagem existe
    const post = await this.postRepository.findPostById(postId);

    if (!post) {
      throw new Error("Postagem não encontrada.");
    }

    // Verifica se o usuário tem permissão para atualizar a postagem
    if (post.id_usuario !== userId) {
      throw new Error("Você não tem permissão para editar esta postagem.");
    }

    // Chama o repository para atualizar a postagem
    const updatedPost = await this.postRepository.updatePost(postId, conteudo, midia);
    return updatedPost;
  }
}

export { UpdatePostService };
