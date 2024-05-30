import {Request,Response} from "express";
import { TreinadorDetailService } from "../../services/treinador/DetailTreinadorSevice";

class DetailTreinadorController{
    async handle(req:Request,res:Response){
        const {id_usuario} = req.body;

        const treinadorDetailService = new TreinadorDetailService();
        try {
            const detailTreinador = await treinadorDetailService.execute(id_usuario);
            return res.json(detailTreinador)
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
}
export{DetailTreinadorController}