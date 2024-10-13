import { Router } from "express";
import { CreateArbitroController } from "../controllers/arbitro/CreateArbitroController";
import { DetailArbitroController } from "../controllers/arbitro/DetailArbitroController";

const arbitroRouter = Router();

const createArbitroController = new CreateArbitroController();
const detailArbitroController = new DetailArbitroController();

arbitroRouter.post('/createArbitro', createArbitroController.handle);
arbitroRouter.get('/arbitro/:id_arbitro', detailArbitroController.handle);

export { arbitroRouter };
