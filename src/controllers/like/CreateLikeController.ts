import { Request, Response } from "express";
import { CreateLikeService } from "../../services/like/CreateLikeService";

class CreateLikeController {
  async handle(req: Request, res: Response) {
    const { postId } = req.params;
    const userId = req.user_id; // O user_id vem do middleware de autenticação

    const createLikeService = new CreateLikeService();

    try {
      const like = await createLikeService.execute({ postId, userId });
      return res.status(201).json(like);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { CreateLikeController };
