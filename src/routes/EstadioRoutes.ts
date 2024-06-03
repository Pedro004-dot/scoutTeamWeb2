import { Router } from "express";
import { CreateEstadioController } from "../controllers/estadio/CreateEstadioController";
import { GetEstadioController }    from "../controllers/estadio/DetailEstadioController";
import { UpdateEstadioController } from "../controllers/estadio/UpdateEstadioController";
import { DeleteEstadioController } from "../controllers/estadio/DeleteEstadioController";
import { isAuthenticate } from "../middlewares/isAurthenticated";

const estadioRouter = Router();

estadioRouter.post("/createEstadio", isAuthenticate,new CreateEstadioController().handle);
estadioRouter.get("/getEstadio/:id_estadio", isAuthenticate,new GetEstadioController().handle);
estadioRouter.put("/updateEstadio/:id_estadio", isAuthenticate,new UpdateEstadioController().handle);
estadioRouter.delete("/deleteEstadio/:id_estadio", isAuthenticate,new DeleteEstadioController().handle);

export { estadioRouter };
