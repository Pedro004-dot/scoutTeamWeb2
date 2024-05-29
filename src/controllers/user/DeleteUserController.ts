import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";

class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params;

    const deleteUserService = new DeleteUserService();

    try {
      await deleteUserService.execute(userId);
      return res.status(200).json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { DeleteUserController };
