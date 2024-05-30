import { Request, Response } from "express";
import { CreateCoachService } from "../../services/treinador/CreateCoachService";


class CreateTreinadorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_usuario, id_time,categoria, cref, } = req.body;

    const createCoachService = new CreateCoachService;

    try {
      const treinador = await createCoachService.execute({
        id_time,
        id_usuario,
        categoria,
        cref
      });
      return res.status(201).json(treinador);
    } catch (error) {
      console.error("Erro ao criar Treinador:", error); // Log de erro
      return res.status(400).json({ message: error.message });
    }
  }
}

export { CreateTreinadorController };
