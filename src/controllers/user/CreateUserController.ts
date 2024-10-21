import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const {
      email,
      senha,
      perfil,
      nome_usuario,
      cidade_endereco,
      estado_endereco,
      data_nascimento,
      nacionalidade,
      telefone_contato,
      foto,
      nome,
    } = req.body;

    const createUserService = new CreateUserService();

    try {
      // Executa a criação do usuário
      const user = await createUserService.execute({
        email,
        senha,
        perfil,
        nome_usuario,
        cidade_endereco,
        estado_endereco,
        data_nascimento,
        nacionalidade,
        telefone_contato,
        foto,
        nome,
      });

      // Retorna a resposta com o usuário criado
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { CreateUserController };
