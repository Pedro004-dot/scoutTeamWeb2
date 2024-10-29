import { Request, Response } from "express";
import { GetPostsService } from "../../services/post/GetPostService";
import { GetSalvarPostService } from "../../services/salvarPost/GetSalvarPostByUserService";


class GetSalvarPostController {
  async handle(req: Request, res: Response) {
    const userId = req.user_id; // Obtém o ID do usuário a partir do middleware de autenticação

    const getUserPostsService = new GetSalvarPostService();

    try {
      const posts = await getUserPostsService.execute(userId);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { GetSalvarPostController };
