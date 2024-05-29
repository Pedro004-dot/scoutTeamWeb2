import {Request,Response} from "express"
import { CreateOrganizerService } from '../../services/organizador/CreateOrganizerService'

class CreateOrganizerController{
   

    async handle(req : Request, res: Response){
        const {id_usuario} = req.body

        const createOrganizerService = new CreateOrganizerService;

        try {
            const organizer = await createOrganizerService.execute({
                id_usuario
            })
            return res.json(organizer)
        } catch (error) {
            
        }
    }
}
export {CreateOrganizerController}

