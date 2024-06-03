import { Router } from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreatePartidaController } from "../controllers/partida/CreatePartidaController";
import { GetJogosByPartidaController } from "../controllers/partida/DetailPartidaController";
import { UpdatePartidaController } from "../controllers/partida/UpdatePartidaController";
import { DeletePartidaController } from "../controllers/partida/DeletePartidaController";


const partidaRouter = Router();

partidaRouter.post('/createPartida',isAuthenticate, new CreatePartidaController().handle);
partidaRouter.get('/getPartida',isAuthenticate, new GetJogosByPartidaController().handle);
partidaRouter.put('/updatePartida',isAuthenticate, new UpdatePartidaController().handle);
partidaRouter.delete('/deletePartida',isAuthenticate, new DeletePartidaController().handle);

export {partidaRouter}