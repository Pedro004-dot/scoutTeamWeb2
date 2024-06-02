import { Request, Response } from "express";
import { UpdateCompetitionService } from "../../services/competicao/UpdateCompeticaoService";

class UpdateCompetitionController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id_competicao } = req.params;
    const {
      nome_campeonato,
      regulamento,
      data_inicio,
      data_fim,
      formato_campeonato,
      quantidade_times,
      orgao_publico,
      times_ids
    } = req.body;

    const updateCompetitionService = new UpdateCompetitionService();

    try {
      const updatedCompetition = await updateCompetitionService.execute({
        id_competicao,
        nome_campeonato,
        regulamento,
        data_inicio,
        data_fim,
        formato_campeonato,
        quantidade_times,
        orgao_publico,
        times_ids
      });

      return res.json(updatedCompetition);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UpdateCompetitionController };
