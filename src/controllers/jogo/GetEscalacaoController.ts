import { Request, Response } from "express";
import { GetEscalacaoByJogo } from "../../services/jogo/GetEscalacaoByJogo";

class GetEscalacaoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_jogo } = req.params;

    const getEscalacaoByJogo = new GetEscalacaoByJogo();

    try {
      const jogo = await getEscalacaoByJogo.execute(id_jogo);
      return res.json(jogo);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { GetEscalacaoController };
