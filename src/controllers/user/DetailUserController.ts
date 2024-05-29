import { Request,Response } from "express";
import { UserDetailService } from "../../services/user/DetailUserService";

class DetailUserController{
    async handle(req: Request, res: Response){
        const{email} = req.body;

        const userDetailService = new UserDetailService();
        
        try {
            const detailUser = await userDetailService.execute(email);
            return res.json(detailUser);
          } catch (error) {
            return res.status(404).json({ message: error.message });
          }
    }
}
export{DetailUserController}