import { Router } from "express";
import { CreateEventoController } from "../controllers/evento/CreateEventoController";
import { UpdateEventoController } from "../controllers/evento/UpdateEventoController";
import { DeleteEventoController } from "../controllers/evento/DeleteEventoController";
import { GetEventoController } from "../controllers/evento/DetailEventoController";
import { GetEventosByAtletaController } from "../controllers/evento/GetEventosByAtletaController";
import { GetEventosByPartidaController } from "../controllers/evento/GetEventosByPartidaController";
import { GetEventosByTimeController } from "../controllers/evento/GetEventosByTimeController";
import { isAuthenticate } from "../middlewares/isAurthenticated";

const eventoRouter = Router();


eventoRouter.post('/createEvento', isAuthenticate, new CreateEventoController().handle);
eventoRouter.put('/evento/:id_evento', isAuthenticate,new UpdateEventoController().handle);
eventoRouter.delete('/evento/:id_evento', isAuthenticate,new DeleteEventoController().handle);
eventoRouter.get('/evento/:id_evento', isAuthenticate,new GetEventoController().handle);
eventoRouter.get('/eventos/atleta/:id_atleta', isAuthenticate,new GetEventosByAtletaController().handle);
eventoRouter.get('/eventos/partida/:id_partida', isAuthenticate,new GetEventosByPartidaController().handle);
eventoRouter.get('/eventos/time/:id_time', isAuthenticate,new GetEventosByTimeController().handle);

export { eventoRouter };
