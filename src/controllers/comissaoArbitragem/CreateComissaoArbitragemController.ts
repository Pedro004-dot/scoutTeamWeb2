import { Request, Response } from "express";
import { CreateComissaoArbitragemService } from "../../services/comissaoArbitragem/CreateComissaoArbitragemService";

class CreateComissaoArbitragemController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_partida, id_arbitro } = req.body;

    const createComissaoArbitragemService = new CreateComissaoArbitragemService();

    try {
      const comissaoArbitragem = await createComissaoArbitragemService.execute({ id_partida, id_arbitro });
      return res.status(201).json(comissaoArbitragem);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateComissaoArbitragemController };
