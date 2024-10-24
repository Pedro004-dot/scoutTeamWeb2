import { Request, Response } from "express";
import { DeleteComentarioService } from "../../services/comentario/DeleteComentarioService";

class DeleteComentarioController {
  async handle(req: Request, res: Response) {
    const { commentId } = req.params;

    const deleteComentarioService = new DeleteComentarioService();

    try {
      const comment = await deleteComentarioService.execute({ commentId });
      return res.status(201).json("Comentario apagado com sucesso");
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { DeleteComentarioController };
