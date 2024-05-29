import { Router} from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreateAtletaController } from "../controllers/atleta/CreateAtletaController";
import { DetailsAtletaController } from "../controllers/atleta/DetailsAtletaController";
const atletaRouter = Router()

atletaRouter.post('/createAtleta',isAuthenticate, new CreateAtletaController().handle);
atletaRouter.post('/getAtleta',isAuthenticate, new DetailsAtletaController().handle)
export {atletaRouter}