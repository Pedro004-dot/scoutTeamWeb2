import {Request,Response} from "express";
import { TeamDetailService } from "../../services/time/DetailTeamSevice";

class DetailTeamController{
    async handle(req:Request,res:Response){
        const {id_usuario} = req.body;

        const teamDetailService = new TeamDetailService();
        try {
            const detailTeam = await teamDetailService.execute(id_usuario);
            return res.json(detailTeam)
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
}
export{DetailTeamController}