import { Router } from "express";
import { CreateEstadioController } from "../controllers/estadio/CreateEstadioController";
import { GetEstadioController }    from "../controllers/estadio/DetailEstadioController";
import { UpdateEstadioController } from "../controllers/estadio/UpdateEstadioController";
import { DeleteEstadioController } from "../controllers/estadio/DeleteEstadioController";

const estadioRouter = Router();

estadioRouter.post("/createEstadio", new CreateEstadioController().handle);
estadioRouter.get("/getEstadio/:id_estadio", new GetEstadioController().handle);
estadioRouter.put("/updateEstadio/:id_estadio", new UpdateEstadioController().handle);
estadioRouter.delete("/deleteEstadio/:id_estadio", new DeleteEstadioController().handle);

export { estadioRouter };
