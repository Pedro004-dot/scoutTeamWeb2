import { Request, Response } from "express";
import { UpdatePostService } from "../../services/post/UpdatePostService";

class UpdatePostsController {
  async handle(req: Request, res: Response) {
    const userId = req.user_id;
    const {postId} = req.params; // Obtém o ID do usuário a partir do middleware de autenticação
    const { conteudo, midia, tipo } = req.body;

    const updatePostsService = new UpdatePostService();

    try {
        const post = await updatePostsService.execute({ postId, conteudo, midia, tipo, userId  });
      return res.status(200).json(post);
    } catch (error) {
        console.log(error)
      return res.status(400).json({ message: error.message });
    }
  }
}

export { UpdatePostsController };
