import { Router } from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreatePostController } from "../controllers/post/CreatePostController";
import { GetPostController } from "../controllers/post/GetPostController";
import { DeletePostController } from "../controllers/post/DeletePostControlle";
import { UpdatePostsController } from "../controllers/post/UpdatePostController";

const postagemRouter = Router();

// Cria uma nova postagem
postagemRouter.post('/createPost', isAuthenticate, new CreatePostController().handle);

// // Pega todas as postagens (ou postagens de um usuário específico)
postagemRouter.get('/get/:userId', isAuthenticate, new GetPostController().handle);

// // Atualiza uma postagem existente
 postagemRouter.put('/update/:postId', isAuthenticate, new UpdatePostsController().handle);

// // Deleta uma postagem
 postagemRouter.delete('/delete/:postId', isAuthenticate, new DeletePostController().handle);

export { postagemRouter };
