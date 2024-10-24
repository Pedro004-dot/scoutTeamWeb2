import { Request, Response } from "express";
import { GetPostsService } from "../../services/post/GetPostService";


class GetPostController {
  async handle(req: Request, res: Response) {
    const userId = req.user_id; // Obtém o ID do usuário a partir do middleware de autenticação

    const getUserPostsService = new GetPostsService();

    try {
      const posts = await getUserPostsService.execute(userId);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { GetPostController };
