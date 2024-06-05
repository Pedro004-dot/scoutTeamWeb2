import { Router } from "express";
import { CreateComissaoArbitragemController } from "../controllers/comissaoArbitragem/CreateComissaoArbitragemController";
import { DetailComissaoArbitragemController } from "../controllers/comissaoArbitragem/DetailComissaoArbitragemController";

const comissaoArbitragemRouter = Router();

const createComissaoArbitragemController = new CreateComissaoArbitragemController();
const findComissaoArbitragemController = new DetailComissaoArbitragemController();

comissaoArbitragemRouter.post('/createComissaoArbitragem', createComissaoArbitragemController.handle);
comissaoArbitragemRouter.get('/getComissaoArbitragem', findComissaoArbitragemController.handle);

export { comissaoArbitragemRouter };
