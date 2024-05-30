import { Router,Request, Response } from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreateTeamController } from "../controllers/time/CreateTimeController";

const timeRouter = Router();

timeRouter.post('/createTime', isAuthenticate,new CreateTeamController().handle);
// treinadorRouter.get('/getOrganizer', isAuthenticate,new DetailOrganizerController().handle)
export  {timeRouter}