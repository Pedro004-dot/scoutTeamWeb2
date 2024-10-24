import { Request, Response } from "express";
import { DeleteLikeService } from "../../services/like/DeleteLikeService";

class DeleteLikeController {
  async handle(req: Request, res: Response) {
    const { postId } = req.body;
    const userId = req.user_id; // O user_id vem do middleware de autenticação

    const deleteLikeService = new DeleteLikeService();

    try {
      const like = await deleteLikeService.execute({ postId, userId });
      return res.status(201).json("Like removido com sucesso");
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message });
      
    }
  }
}

export { DeleteLikeController };
