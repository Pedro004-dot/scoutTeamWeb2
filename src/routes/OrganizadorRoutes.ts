import { Router,Request, Response } from "express";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { CreateOrganizerController } from "../controllers/organizador/CreateOrganizerController";
import { DetailOrganizerController } from "../controllers/organizador/DetailOrganizerController";
const organizadorRouter = Router();

organizadorRouter.post('/createOrganizer', isAuthenticate,new CreateOrganizerController().handle);
organizadorRouter.get('/getOrganizer', isAuthenticate,new DetailOrganizerController().handle)
export  {organizadorRouter}