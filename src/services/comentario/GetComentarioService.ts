import { ComentarioRepository } from "../../repository/comentario/ComentarioRepository";


interface GetCommentsRequest {
  postId: string;
}

class GetComentarioService {
  private commentRepository: ComentarioRepository;

  constructor() {
    this.commentRepository = new ComentarioRepository();
  }

  async execute({ postId }: GetCommentsRequest) {
    // Obtém todos os comentários de uma postagem
    const comments = await this.commentRepository.getCommentsByPost(postId);
    if(!comments){
        throw new Error("");
    }
    return comments;
  }
}

export { GetComentarioService };
