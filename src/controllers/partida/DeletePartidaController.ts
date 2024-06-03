import { Request, Response } from "express";
import { DeletePartidaService } from "../../services/partida/DeletePartidaService";

class DeletePartidaController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_partida } = req.params;

    const deletePartidaService = new DeletePartidaService();

    try {
      await deletePartidaService.execute(id_partida);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { DeletePartidaController };
