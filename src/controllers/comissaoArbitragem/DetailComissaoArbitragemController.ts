import { Request, Response } from "express";
import { DetailComissaoArbitragemService } from "../../services/comissaoArbitragem/DetailComissaoArbitragemService";

class DetailComissaoArbitragemController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_partida } = req.params;

    const detailComissaoArbitragemService = new DetailComissaoArbitragemService();

    try {
      const comissaoArbitragem = await detailComissaoArbitragemService.execute(id_partida);
      return res.status(200).json(comissaoArbitragem);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
}

export { DetailComissaoArbitragemController };
