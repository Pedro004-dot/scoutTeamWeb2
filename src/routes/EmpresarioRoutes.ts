import { Router,Request, Response } from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreateAgentController } from "../controllers/empresario/CreateEmpresarioController";
import { DetailEmpresarioController } from "../controllers/empresario/DetailEmpresarioController";


const empresarioRouter = Router();

empresarioRouter.post('/createEmpresario', isAuthenticate,new CreateAgentController().handle);
empresarioRouter.get('/getEmpresario',isAuthenticate,new DetailEmpresarioController().handle);
export  {empresarioRouter}