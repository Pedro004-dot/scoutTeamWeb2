import { Request,Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController{
    async handle(req: Request, res: Response){
        
        const { email, nome_usuario, cidade_endereco, estado_endereco, nome, foto, telefone_contato } = req.body;

        const updateUserService = new UpdateUserService();
        
        try {
            const updatedUser = await updateUserService.execute({ email, nome_usuario, cidade_endereco, estado_endereco, nome, foto, telefone_contato });
            return res.status(200).json(updatedUser);
          } catch (error) {
            return res.status(400).json({ message: error.message });
          }
        
    }
}
export{UpdateUserController}