import { Router } from "express";
import { CreateLikeController } from "../controllers/like/CreateLikeController";
import { isAuthenticate } from "../middlewares/isAurthenticated";

const likeRouter = Router();

// Rota para adicionar uma curtida
likeRouter.post('/createLike', isAuthenticate, new CreateLikeController().handle);

// Rota para remover uma curtida
//curtidaRouter.delete('/unlike/:postId', isAuthenticate, new RemoveLikeController().handle);

export { likeRouter };