import { Request, Response } from "express";
import { GetEventoService } from "../../services/evento/DetailEventoService";

class GetEventoController {
  async handle(req: Request, res: Response) {
    const { id_evento } = req.params;

    const getEventoService = new GetEventoService();

    try {
      const evento = await getEventoService.execute(id_evento);
      return res.json(evento);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { GetEventoController };
