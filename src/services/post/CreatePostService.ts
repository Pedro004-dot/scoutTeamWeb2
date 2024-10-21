import { TipoPostagem } from "@prisma/client";
import { PostRepository } from "../../repository/post/PostRepository";

interface CreatePostRequest {
  conteudo: string;
  midia?: string[];
  tipo: TipoPostagem;
  userId: string;
}

class CreatePostService {
  private postRepository: PostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  async execute({ conteudo, midia, tipo, userId }: CreatePostRequest) {
    if (!conteudo && !midia) {
      throw new Error("Conteúdo ou mídia são obrigatórios.");
    }

    // Chama o repository para criar a postagem
    const post = await this.postRepository.createPost({
      conteudo,
      midia,
      tipo,
      userId,
    });

    return post;
  }
}

export { CreatePostService };
