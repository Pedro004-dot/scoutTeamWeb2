import { Request, Response } from "express";
import { DeleteCompetitionService } from "../../services/competicao/DeleteCompeticaoService";

class DeleteCompetitionController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_competicao } = req.params;

    const deleteCompetitionService = new DeleteCompetitionService();

    try {
      await deleteCompetitionService.execute(id_competicao);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { DeleteCompetitionController };
