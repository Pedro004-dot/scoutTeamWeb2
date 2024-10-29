import { Router } from "express";
import { CreateLikeController } from "../controllers/like/CreateLikeController";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { DeleteLikeController } from "../controllers/like/DeleteLikeController";
import { GetLikeController } from "../controllers/like/GetLikeController";

const likeRouter = Router();

// Rota para adicionar uma curtida
likeRouter.post('/createLike/:postId', isAuthenticate, new CreateLikeController().handle);

// Rota para remover uma curtida
likeRouter.delete('/unlike/:postId', isAuthenticate, new DeleteLikeController().handle);

//Rota para buscar curtidas
likeRouter.get('/get/:postId', isAuthenticate, new GetLikeController().handle);
export { likeRouter };