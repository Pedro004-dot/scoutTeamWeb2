import { Request, Response } from "express";
import { DeleteJogoService } from "../../services/jogo/DeleteJogoService";

class DeleteJogoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_jogo } = req.params;

    const deleteJogoService = new DeleteJogoService();

    try {
      await deleteJogoService.execute(id_jogo);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { DeleteJogoController };
