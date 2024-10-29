import { Router } from "express";
import { AddCommentController } from "../controllers/comentario/CreateComentarioController";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { GetCommentsController } from "../controllers/comentario/GetComentarioController";
import { DeleteComentarioController } from "../controllers/comentario/DeleteComentarioController";
import { UpdateComentarioController } from "../controllers/comentario/UpdateComentarioController";

const comentarioRouter = Router();

// Rota para adicionar um comentário
comentarioRouter.post('/create/:postId', isAuthenticate, new AddCommentController().handle);

// Rota para atualizar um comentário
comentarioRouter.put('/update/:commentId', isAuthenticate, new UpdateComentarioController().handle);

// // Rota para deletar um comentário
comentarioRouter.delete('/delete/:commentId', isAuthenticate, new DeleteComentarioController().handle);

// // Rota para obter todos os comentários de uma postagem
comentarioRouter.get('/get/:postId', isAuthenticate, new GetCommentsController().handle);

export { comentarioRouter };
