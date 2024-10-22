import { TipoPostagem } from "@prisma/client";
import { PostRepository } from "../../repository/post/PostRepository";
import { UserRepository } from "../../repository/user/UserRepository";

interface CreatePostRequest {
  conteudo: string;
  midia?: string[];
  tipo: TipoPostagem;
  userId: string;
}

class CreatePostService {
  private postRepository: PostRepository;
  private userRepository        :  UserRepository;
  constructor() {
    this.postRepository = new PostRepository();
    this.userRepository = new UserRepository();
  }

  async execute({ conteudo, midia, tipo, userId }: CreatePostRequest) {
    if (!conteudo && !midia) {
      throw new Error("Conteúdo ou mídia são obrigatórios.");
    }
    const user = await this.userRepository.findUserById(userId);
    if (!user) {
      throw new Error("Usuário não existe");
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
