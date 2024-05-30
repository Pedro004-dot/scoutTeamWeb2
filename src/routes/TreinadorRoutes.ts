import { Router,Request, Response } from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreateTreinadorController } from "../controllers/treinador/CreateTreinadorController";
import { DetailTreinadorController } from "../controllers/treinador/DetailTreinadorController";

const treinadorRouter = Router();

treinadorRouter.post('/createTreinador', isAuthenticate,new CreateTreinadorController().handle);
treinadorRouter.get('/getTreinador',isAuthenticate,new DetailTreinadorController().handle);
export  {treinadorRouter}