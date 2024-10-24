import { Router } from "express";
import { AddCommentController } from "../controllers/comentario/CreateComentarioController";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { GetCommentsController } from "../controllers/comentario/GetComentarioController";
// import { UpdateCommentController } from "../controllers/comment/UpdateCommentController";
// import { DeleteCommentController } from "../controllers/comment/DeleteCommentController";
// import { GetCommentsController } from "../controllers/comment/GetCommentsController";

const comentarioRouter = Router();

// Rota para adicionar um comentário
comentarioRouter.post('/create/:postId', isAuthenticate, new AddCommentController().handle);

// Rota para atualizar um comentário
// comentarioRouter.put('/:commentId', isAuthenticate, new UpdateCommentController().handle);

// // Rota para deletar um comentário
// comentarioRouter.delete('/:commentId', isAuthenticate, new DeleteCommentController().handle);

// // Rota para obter todos os comentários de uma postagem
comentarioRouter.get('/get/:postId', isAuthenticate, new GetCommentsController().handle);

export { comentarioRouter };
