import { Request, Response } from "express";
import { GetEstadioService } from "../../services/estadio/DetailEstadioService";

class GetEstadioController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_estadio } = req.params;

    const getEstadioService = new GetEstadioService();

    try {
      const estadio = await getEstadioService.execute(id_estadio);
      return res.json(estadio);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { GetEstadioController };
