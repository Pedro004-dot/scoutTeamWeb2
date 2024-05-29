import { Router,Request, Response } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/DetailUserController";
import { isAuthenticate } from "../middlewares/isAurthenticated";
import { UpdateUserController } from "../controllers/user/UpdateUserController";
import { DeleteUserController } from "../controllers/user/DeleteUserController";

const loginRouter = Router();

loginRouter.post('/createUser', new CreateUserController().handle);
loginRouter.post('/authenticateUser', new AuthUserController().handle);
loginRouter.get('/getUser', isAuthenticate, new DetailUserController().handle);
loginRouter.put('/updateUser', isAuthenticate, new UpdateUserController().handle);
loginRouter.delete('/deleteUser/:userId', isAuthenticate, new DeleteUserController().handle);

export { loginRouter };