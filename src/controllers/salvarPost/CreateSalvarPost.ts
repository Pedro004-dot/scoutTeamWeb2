import { Request, Response } from "express";
import { CreateSalvarPostService } from "../../services/salvarPost/CreateSalvarPostService";

class CreateSalvarPostController {
  async handle(req: Request, res: Response) {
    const {postId} = req.params;
    const userId = req.user_id; // O `user_id` vem do middleware de autenticação

    const createPostService = new CreateSalvarPostService();

    try {
      const post = await createPostService.execute({ postId, userId });
      return res.status(201).json(post);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { CreateSalvarPostController };
