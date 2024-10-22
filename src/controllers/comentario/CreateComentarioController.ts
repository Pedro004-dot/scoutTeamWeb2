import { Request, Response } from "express";
import { CreateComentarioService } from "../../services/comentario/CreateComentarioService";

class AddCommentController {
  async handle(req: Request, res: Response) {
    const { postId } = req.params;
    const { conteudo } = req.body;
    const userId = req.user_id; // O user_id vem do middleware de autenticação

    const createComentarioService = new CreateComentarioService();

    try {
      const comment = await createComentarioService.execute({ conteudo, postId, userId });
      return res.status(201).json(comment);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { AddCommentController };
