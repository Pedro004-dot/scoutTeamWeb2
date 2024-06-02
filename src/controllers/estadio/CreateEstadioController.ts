import { Request, Response } from "express";
import { CreateEstadioService } from "../../services/estadio/CreateEstadioService";

class CreateEstadioController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, cidade_endereco, estado_endereco, capacidade, tipo_gramado, id_time } = req.body;

    const createEstadioService = new CreateEstadioService();

    try {
      const estadio = await createEstadioService.execute({
        nome,
        cidade_endereco,
        estado_endereco,
        capacidade,
        tipo_gramado,
        id_time
      });

      return res.json(estadio);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateEstadioController };
