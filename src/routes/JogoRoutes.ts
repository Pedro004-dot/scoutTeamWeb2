import { Router } from "express";
import { CreateJogoController } from "../controllers/jogo/CreateJogoController";
import { GetJogosByPartidaController } from "../controllers/partida/DetailPartidaController";
import { UpdateJogoController } from "../controllers/jogo/UpdateJogoController";
import { DeleteJogoController } from "../controllers/jogo/DeleteJogoController";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { GetEscalacaoController } from "../controllers/jogo/GetEscalacaoController";

const jogoRouter = Router();

jogoRouter.post("/createJogo", isAuthenticate,new CreateJogoController().handle);
jogoRouter.get("/getJogo", isAuthenticate,new GetJogosByPartidaController().handle);
jogoRouter.put("/jogo/:id_jogo", isAuthenticate,new UpdateJogoController().handle);
jogoRouter.delete("/jogo/:id_jogo", isAuthenticate,new DeleteJogoController().handle);
jogoRouter.get("/getJogo", isAuthenticate,new GetEscalacaoController().handle);

export { jogoRouter };
