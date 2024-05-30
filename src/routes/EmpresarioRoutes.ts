import { Router,Request, Response } from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreateAgentController } from "../controllers/empresario/CreateEmpresarioController";


const empresarioRouter = Router();

empresarioRouter.post('/createEmpresario', isAuthenticate,new CreateAgentController().handle);
// treinadorRouter.get('/getOrganizer', isAuthenticate,new DetailOrganizerController().handle)
export  {empresarioRouter}