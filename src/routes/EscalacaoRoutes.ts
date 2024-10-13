import { Router } from "express";

import { CreateEscalacaoController } from "../controllers/escalacao/CreateEscalacaoController";
import { isAuthenticate } from "../middlewares/isAurthenticated";

const escalacaoRouter = Router();

escalacaoRouter.post("/createEscalacao", isAuthenticate,new CreateEscalacaoController().handle);


export { escalacaoRouter };
