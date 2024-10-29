import { Request, Response } from "express";
import { GetLikeService } from "../../services/like/GetLikeService";

class GetLikeController {
  async handle(req: Request, res: Response) {
    const { postId } = req.params;
    const userId = req.user_id; // O user_id vem do middleware de autenticação

    const getLikeService = new GetLikeService();

    try {
      const like = await getLikeService.execute({ postId,userId });
      return res.status(201).json(like);
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message });
      
    }
  }
}

export { GetLikeController };
