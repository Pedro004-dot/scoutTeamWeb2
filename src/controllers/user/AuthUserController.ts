import { Request,Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController{
    async handle(req: Request, res:Response){
        const {email, senha} = req.body;

        const authUserService = new AuthUserService();

        try {
            const authData = await authUserService.execute({ email, senha });
            return res.status(200).json(authData);
          } catch (error) {
            console.error("Erro durante a autenticação:", error); // Log de erro
            return res.status(400).json({ message: error.message });
          }
    }
}

export{AuthUserController}