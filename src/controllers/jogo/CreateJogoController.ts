import { Request, Response } from "express";
import { CreateJogoService } from "../../services/jogo/CreateJogoService";

class CreateJogoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_partida, id_usuario, gols_time, formacao_time } = req.body;

    const createJogoService = new CreateJogoService();

    try {
      const jogo = await createJogoService.execute({
        id_partida,
        id_usuario,
        gols_time,
        formacao_time
      });

      return res.json(jogo);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateJogoController };
