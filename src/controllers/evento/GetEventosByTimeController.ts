import { Request, Response } from "express";
import { GetEventoService } from "../../services/evento/DetailEventoService";

class GetEventosByTimeController {
  async handle(req: Request, res: Response) {
    const { id_time } = req.params;

    const getEventoService = new GetEventoService();

    try {
      const eventos = await getEventoService.getEventosByTime(id_time);
      return res.json(eventos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { GetEventosByTimeController };
