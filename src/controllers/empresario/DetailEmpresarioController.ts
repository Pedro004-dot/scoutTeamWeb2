import {Request,Response} from "express";
import { EmpresarioDetailService } from "../../services/empresario/DetailAgenteSevice";

class DetailEmpresarioController{
    async handle(req:Request,res:Response){
        const {id_usuario} = req.body;

        const empresarioDetailService = new EmpresarioDetailService();
        try {
            const detailTeam = await empresarioDetailService.execute(id_usuario);
            return res.json(detailTeam)
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
}
export{DetailEmpresarioController}