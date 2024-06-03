import { Request, Response } from "express";
import { GetJogoService } from "../../services/jogo/DetailsJogoService";

class GetJogoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_jogo } = req.params;

    const getJogoService = new GetJogoService();

    try {
      const jogo = await getJogoService.execute(id_jogo);
      return res.json(jogo);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { GetJogoController };
