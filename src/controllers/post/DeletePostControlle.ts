import { Request, Response } from "express";
import { DeletePostService } from "../../services/post/DeletePostService";

class DeletePostController{
    async handle(req: Request, res: Response){
        const {postId} = req.params;
        const userId = req.user_id; // O `user_id` vem do middleware de autenticação

        const deletePostService = new DeletePostService();

        try {
            const postDelete = await deletePostService.execute(postId,userId)
            return res.status(200).json({ message: "Postagem deletada com sucesso." });
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: error.message });
        }
    }
}
export {DeletePostController}
