import { Request, Response } from "express";
import { CreateAgentService } from "../../services/empresario/CreateAgenteService";



class CreateAgentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_usuario,categoria } = req.body;

    const createAgentService = new CreateAgentService;

    try {
      const empresario = await createAgentService.execute({
        id_usuario,
        categoria
      });
      return res.status(201).json(empresario);
    } catch (error) {
      console.error("Erro ao criar empresario:", error); // Log de erro
      return res.status(400).json({ message: error.message });
    }
  }
}

export { CreateAgentController };
