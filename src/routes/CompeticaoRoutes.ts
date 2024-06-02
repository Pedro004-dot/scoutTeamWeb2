import { Router} from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreateCompetitionController } from "../controllers/competicao/CreateCompeticaoController";
import {CompeticaoDetailController} from "../controllers/competicao/DetailCompeticaoController"
import {UpdateCompetitionController} from "../controllers/competicao/UpdateCompeticaoController"
import {DeleteCompetitionController} from "../controllers/competicao/DeleteCompeticaoController"
const competicaoRouter = Router();

competicaoRouter.post('/createCompeticao', isAuthenticate, new CreateCompetitionController().handle);
competicaoRouter.get('/getCompeticao',isAuthenticate, new CompeticaoDetailController().handle)
competicaoRouter.put('/updateCompeticao',isAuthenticate,new UpdateCompetitionController().handle)
competicaoRouter.delete('/deleteCompeticao',isAuthenticate,new DeleteCompetitionController().handle)

export {competicaoRouter};
