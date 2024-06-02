import { Request, Response } from "express";
import { UpdateEstadioService } from "../../services/estadio/UpdateEstadioService";

class UpdateEstadioController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_estadio } = req.params;
    const { nome, cidade_endereco, estado_endereco, capacidade, tipo_gramado, id_time } = req.body;

    const updateEstadioService = new UpdateEstadioService();

    try {
      const estadio = await updateEstadioService.execute({
        id_estadio,
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

export { UpdateEstadioController };
