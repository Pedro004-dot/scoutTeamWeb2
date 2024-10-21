import { Router } from "express";
import { CreateLikeController } from "../controllers/like/CreateLikeController";
import { isAuthenticate } from "../middlewares/isAurthenticated";

const curtidaRouter = Router();

// Rota para adicionar uma curtida
curtidaRouter.post('/like/:postId', isAuthenticate, new CreateLikeController().handle);

// Rota para remover uma curtida
//curtidaRouter.delete('/unlike/:postId', isAuthenticate, new RemoveLikeController().handle);

export { curtidaRouter };