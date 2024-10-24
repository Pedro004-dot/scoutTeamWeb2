import { Request, Response } from "express";
import { UpdateComentarioService } from "../../services/comentario/UpdateComentarioService";

class UpdateComentarioController {
  async handle(req: Request, res: Response) {
    const { commentId } = req.params;
    const { conteudo } = req.body;
    const userId = req.user_id; // O user_id vem do middleware de autenticação

    const updateComentarioService = new UpdateComentarioService();

    try {
      const comment = await updateComentarioService.execute({ conteudo, commentId });
      return res.status(201).json(comment);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { UpdateComentarioController };
