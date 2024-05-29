import { Request, Response } from "express";
import { CreateAtletaService } from "../../services/atleta/CreateAtletaService";

class CreateAtletaController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_usuario, id_time, id_empresario, altura, peso, score, caracteristicasJogo, posicoes } = req.body;

    const createAtletaService = new CreateAtletaService();

    try {
      const atleta = await createAtletaService.execute({
        id_usuario,
        id_time,
        id_empresario,
        altura,
        peso,
        score,
        caracteristicasJogo,
        posicoes
      });
      return res.status(201).json(atleta);
    } catch (error) {
      console.error("Erro ao criar atleta:", error); // Log de erro
      return res.status(400).json({ message: error.message });
    }
  }
}

export { CreateAtletaController };
