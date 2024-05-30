import { Request, Response } from "express";
import { CreateTeamService } from "../../services/time/CreateTeamService";



class CreateTeamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_usuario, id_competicao,categorias,escudo,modelo_uniforme } = req.body;

    const createTeamService = new CreateTeamService;

    try {
      const team = await createTeamService.execute({
        id_competicao,
        id_usuario,
        categorias,
        escudo,
        modelo_uniforme
      });
      return res.status(201).json(team);
    } catch (error) {
      console.error("Erro ao criar Time:", error);
      return res.status(400).json({ message: error.message });
    }
  }
}

export { CreateTeamController };
