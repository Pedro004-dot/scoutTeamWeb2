import { Request, Response } from "express";
import { CreateEventoService } from "../../services/evento/CreateEventoService";

class CreateEventoController {
  async handle(req: Request, res: Response) {
    const { tipo_evento, minuto_jogo, id_atleta, id_partida, id_time } = req.body;

    const createEventoService = new CreateEventoService();

    try {
      const evento = await createEventoService.execute({
        tipo_evento,
        minuto_jogo,
        id_atleta,
        id_partida,
        id_time
      });
      return res.json(evento);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateEventoController };
