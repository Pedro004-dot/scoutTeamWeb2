import { Request, Response } from "express";
import { DeleteEstadioService } from "../../services/estadio/DeleteEstadioService";

class DeleteEstadioController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_estadio } = req.params;

    const deleteEstadioService = new DeleteEstadioService();

    try {
      await deleteEstadioService.execute(id_estadio);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { DeleteEstadioController };
