import { Request, Response } from "express";
import { CreateArbitroService } from "../../services/arbitro/CreateArbitroService";

class CreateArbitroController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, tipo_arbitragem } = req.body;

    const createArbitroService = new CreateArbitroService();

    try {
      const arbitro = await createArbitroService.execute({ nome, tipo_arbitragem });
      return res.status(201).json(arbitro);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateArbitroController };
