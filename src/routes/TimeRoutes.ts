import { Router,Request, Response } from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreateTeamController } from "../controllers/time/CreateTimeController";
import { DetailTeamController } from "../controllers/time/DetailTimeController";

const timeRouter = Router();

timeRouter.post('/createTime', isAuthenticate,new CreateTeamController().handle);
timeRouter.get('/getTime',isAuthenticate,new DetailTeamController().handle);
export  {timeRouter}