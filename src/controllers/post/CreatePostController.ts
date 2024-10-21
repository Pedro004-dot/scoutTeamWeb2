import { Request, Response } from "express";
import { CreatePostService } from "../../services/post/CreatePostService";

class CreatePostController {
  async handle(req: Request, res: Response) {
    const { conteudo, midia, tipo } = req.body;
    const userId = req.user_id; // O `user_id` vem do middleware de autenticação

    const createPostService = new CreatePostService();

    try {
      const post = await createPostService.execute({ conteudo, midia, tipo, userId });
      return res.status(201).json(post);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { CreatePostController };
