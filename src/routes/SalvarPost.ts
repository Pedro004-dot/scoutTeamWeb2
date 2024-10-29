import { Router } from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreateSalvarPostController } from "../controllers/salvarPost/CreateSalvarPost";


const salvarPostRouter = Router();

// Cria uma nova postagem
salvarPostRouter.post('/create/:postId', isAuthenticate, new CreateSalvarPostController().handle);

// // Pega todas as postagens (ou postagens de um usuário específico)
salvarPostRouter.get('/get/:userId', isAuthenticate, new GetPostController().handle);

// // Deleta uma postagem
 salvarPostRouter.delete('/delete/:postId', isAuthenticate, new DeletePostController().handle);

export { salvarPostRouter };