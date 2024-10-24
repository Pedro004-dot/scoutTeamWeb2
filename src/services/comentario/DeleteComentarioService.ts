import { ComentarioRepository } from "../../repository/comentario/ComentarioRepository";


interface DeleteComentarioRequest {
    commentId: string;
}

class DeleteComentarioService{
    private commentRepository: ComentarioRepository

   constructor(){
    this.commentRepository = new ComentarioRepository();
   }

   async execute({commentId}: DeleteComentarioRequest){

    const comments = await this.commentRepository.deleteComment(commentId);
    return comments;
  }
}

export{DeleteComentarioService}
