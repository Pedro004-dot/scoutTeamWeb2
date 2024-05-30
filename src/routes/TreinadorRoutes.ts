import { Router,Request, Response } from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreateTreinadorController } from "../controllers/treinador/CreateTreinadorController";

const treinadorRouter = Router();

treinadorRouter.post('/createTreinador', isAuthenticate,new CreateTreinadorController().handle);
// treinadorRouter.get('/getOrganizer', isAuthenticate,new DetailOrganizerController().handle)
export  {treinadorRouter}