import { ComentarioRepository } from "../../repository/comentario/ComentarioRepository";


interface DeleteComentarioRequest {
    commentId: string;
    userId   : string;
}

class DeleteComentarioService{
    private commentRepository: ComentarioRepository

   constructor(){
    this.commentRepository = new ComentarioRepository();
   }

   async execute({commentId,userId}: DeleteComentarioRequest){
    const comentario = await this.commentRepository.findCommentById(commentId);

    if (!comentario) {
      throw new Error("Comentario não encontrada.");
    }
    if (comentario.id_usuario !== userId) {
      throw new Error("Você não tem permissão para deletar esta postagem.");
    }

    const comments = await this.commentRepository.deleteComment(commentId);
    return comments;
  }
}

export{DeleteComentarioService}
