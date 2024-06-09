import { Request, Response } from "express";
import { GetEventoService } from "../../services/evento/DetailEventoService";

class GetEventosByAtletaController {
  async handle(req: Request, res: Response) {
    const { id_atleta } = req.params;

    const getEventoService = new GetEventoService();

    try {
      const eventos = await getEventoService.getEventosByAtleta(id_atleta);
      return res.json(eventos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { GetEventosByAtletaController };
