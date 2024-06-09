import { Request, Response } from "express";
import { UpdateEventoService } from "../../services/evento/UpdateEventoService";

class UpdateEventoController {
  async handle(req: Request, res: Response) {
    const { id_evento } = req.params;
    const { tipo_evento, minuto_jogo, id_atleta, id_partida, id_time } = req.body;

    const updateEventoService = new UpdateEventoService();

    try {
      const evento = await updateEventoService.execute({
        id_evento,
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

export { UpdateEventoController };
