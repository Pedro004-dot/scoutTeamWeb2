import { Request, Response } from "express";
import { CreatePartidaService } from "../../services/partida/CreatePartidaService";


class CreatePartidaController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { dia_jogo, id_estadio, id_competicao, sumula, id_arbitros } = req.body;

    const createPartidaService = new CreatePartidaService();

    try {
      const partida = await createPartidaService.execute({
        dia_jogo,
        id_estadio,
        id_competicao,
        sumula,
        id_arbitros
      });

      return res.json(partida);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreatePartidaController };
