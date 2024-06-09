import { Request, Response } from "express";
import { GetEventoService } from "../../services/evento/DetailEventoService";

class GetEventosByPartidaController {
  async handle(req: Request, res: Response) {
    const { id_partida } = req.params;

    const getEventoService = new GetEventoService();

    try {
      const eventos = await getEventoService.getEventosByPartida(id_partida);
      return res.json(eventos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { GetEventosByPartidaController };
