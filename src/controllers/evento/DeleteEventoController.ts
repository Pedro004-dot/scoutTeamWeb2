import { Request, Response } from "express";
import { DeleteEventoService } from "../../services/evento/DeleteEventoService";

class DeleteEventoController {
  async handle(req: Request, res: Response) {
    const { id_evento } = req.params;

    const deleteEventoService = new DeleteEventoService();

    try {
      const evento = await deleteEventoService.execute(id_evento);
      return res.json(evento);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { DeleteEventoController };
