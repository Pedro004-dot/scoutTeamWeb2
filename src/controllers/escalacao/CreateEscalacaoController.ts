import { Request, Response } from "express";
import { CreateEscalacaoService } from "../../services/escalacao/CreateEscalacaoService";

class CreateEscalacaoController {
  async handle(req: Request, res: Response) {
    const { id_partida, id_time, posicao,id_atleta } = req.body;

    const createEscalacaoService = new CreateEscalacaoService();

    try {
      const escalacoes = await createEscalacaoService.execute({ id_partida, id_time,posicao, id_atleta });
      return res.json(escalacoes);
    } catch (error) {
      console.log(`Erro: ${error} ` )
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateEscalacaoController };
