import { ComentarioRepository } from "../../repository/comentario/ComentarioRepository";


interface UpdateComentarioRequest {
  conteudo
  commentId: string;
}

class UpdateComentarioService {
  private commentRepository: ComentarioRepository;

  constructor() {
    this.commentRepository = new ComentarioRepository();
  }

  async execute({ commentId, conteudo }: UpdateComentarioRequest) {
    // Obtém todos os comentários de uma postagem
    const comments = await this.commentRepository.updateComment(commentId,conteudo);
    if(!comments){
        throw new Error("");
    }
    return comments;
  }
}

export { UpdateComentarioService };
