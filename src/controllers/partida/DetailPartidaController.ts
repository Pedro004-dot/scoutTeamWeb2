import { Request, Response } from "express";
import {  GetPartidaDetailsService } from "../../services/partida/DetailPartidaService";

class GetJogosByPartidaController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_partida } = req.params;

    const getJogosByPartidaService = new GetPartidaDetailsService();

    try {
      const jogos = await getJogosByPartidaService.execute(id_partida);
      return res.json(jogos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { GetJogosByPartidaController };
