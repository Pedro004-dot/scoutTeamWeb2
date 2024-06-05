import { Request, Response } from "express";
import { DetailArbitroService } from "../../services/arbitro/DetailArbitroService";

class DetailArbitroController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_arbitro } = req.params;

    const detailfindArbitroService = new DetailArbitroService();

    try {
      const arbitro = await detailfindArbitroService.execute(id_arbitro);
      return res.status(200).json(arbitro);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
}

export { DetailArbitroController };
