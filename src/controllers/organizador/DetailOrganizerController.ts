import { Request,Response } from "express";
import { OrganizerDetailService } from "../../services/organizador/DetailOrganizerService";

class DetailOrganizerController{
    async handle(req:Request,res:Response){
        const {id_usuario} = req.body;
        
        const organizerDetailService = new OrganizerDetailService();

        try {
            const detailOrganizer = await organizerDetailService.execute(id_usuario);
            return res.json(detailOrganizer)
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
}
export {DetailOrganizerController}