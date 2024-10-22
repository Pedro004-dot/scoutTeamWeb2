import { ComentarioRepository } from "../../repository/comentario/ComentarioRepository";

interface AddCommentRequest {
  conteudo: string;
  postId: string;
  userId: string;
}

class CreateComentarioService {
  private comentarioRepository: ComentarioRepository;

  constructor() {
    this.comentarioRepository = new ComentarioRepository();
  }

  async execute({ conteudo, postId, userId }: AddCommentRequest) {
    if (!conteudo) {
      throw new Error("Conteúdo do comentário é obrigatório.");
    }

    // Cria o comentário
    const comment = await this.comentarioRepository.createComment({ conteudo, postId, userId });
    return comment;
  }
}

export { CreateComentarioService };
