import { Router } from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreatePostController } from "../controllers/post/CreatePostController";
// import { GetPostsController } from "../controllers/post/GetPostsController";
// import { DeletePostController } from "../controllers/post/DeletePostController";
// import { UpdatePostController } from "../controllers/post/UpdatePostController";

const postagemRouter = Router();

// Cria uma nova postagem
postagemRouter.post('/createPost', isAuthenticate, new CreatePostController().handle);

// // Pega todas as postagens (ou postagens de um usuário específico)
// postagemRouter.get('/', isAuthenticate, new GetPostsController().handle);

// // Atualiza uma postagem existente
// postagemRouter.put('/update/:postId', isAuthenticate, new UpdatePostController().handle);

// // Deleta uma postagem
// postagemRouter.delete('/delete/:postId', isAuthenticate, new DeletePostController().handle);

export { postagemRouter };
