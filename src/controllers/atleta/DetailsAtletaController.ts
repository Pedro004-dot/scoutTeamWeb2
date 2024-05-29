import {Request,Response} from "express";
import { AtletaDetailService } from "../../services/atleta/DetailAtletaService";

class DetailsAtletaController{
    async handle(req:Request,res:Response){
        const {id_usuario} = req.body;

        const atletaDetailService = new AtletaDetailService();
        try {
            const detailAtleta = await atletaDetailService.execute(id_usuario);
            return res.json(detailAtleta)
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
}
export{DetailsAtletaController}