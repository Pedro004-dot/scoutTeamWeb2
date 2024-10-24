import { Request, Response } from "express";
import { GetComentarioService } from "../../services/comentario/GetComentarioService";

class GetCommentsController {
  async handle(req: Request, res: Response) {
    const { postId } = req.params;

    const getCommentsService = new GetComentarioService();

    try {
      const comments = await getCommentsService.execute({ postId });
      return res.status(200).json(comments);
    } catch (error) {
        console.log(error)
      return res.status(400).json({ message: error.message });
    }
  }
}

export { GetCommentsController };
