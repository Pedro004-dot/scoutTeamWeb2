import { Request, Response } from "express";
import { UpdateJogoService } from "../../services/jogo/UpdateJogoService";

class UpdateJogoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_jogo } = req.params;
    const { gols_time, formacao_time } = req.body;

    const updateJogoService = new UpdateJogoService();

    try {
      const jogo = await updateJogoService.execute({
        id_jogo,
        gols_time,
        formacao_time
      });

      return res.json(jogo);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UpdateJogoController };
