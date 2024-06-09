import { Request, Response } from "express";
import { CreateEscalacaoService } from "../../services/escalacao/CreateEscalacaoService";

class CreateEscalacaoController {
  async handle(req: Request, res: Response) {
    const { id_jogo, id_time, formacao,id_atletas } = req.body;

    const createEscalacaoService = new CreateEscalacaoService();

    try {
      const escalacoes = await createEscalacaoService.execute({ id_jogo, id_time,formacao, id_atletas });
      return res.json(escalacoes);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateEscalacaoController };
