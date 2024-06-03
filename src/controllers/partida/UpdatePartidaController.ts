import { Request, Response } from "express";
import { UpdatePartidaService } from "../../services/partida/UpdatePartidaService";

class UpdatePartidaController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_partida } = req.params;
    const { dia_jogo, id_estadio, id_competicao, id_jogo, sumula } = req.body;

    const updatePartidaService = new UpdatePartidaService();

    try {
      const partida = await updatePartidaService.execute({
        id_partida,
        dia_jogo,
        id_estadio,
        id_competicao,
        id_jogo,
        sumula
      });

      return res.json(partida);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UpdatePartidaController };
