import { Request, Response } from "express";
import { CreateCompetitionService } from "../../services/competicao/CreateCompeticaoService";

class CreateCompetitionController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      id_usuario,
      nome_campeonato,
      regulamento,
      data_inicio,
      data_fim,
      formato_campeonato,
      quantidade_times,
      orgao_publico,
      times_ids
    } = req.body;

    const createCompetitionService = new CreateCompetitionService();
    
    try {
      const competition = await createCompetitionService.execute({
        id_usuario,
        nome_campeonato,
        regulamento,
        data_inicio: new Date(data_inicio),
        data_fim: new Date(data_fim),
        formato_campeonato,
        quantidade_times,
        orgao_publico,
        times_ids
      });
      return res.status(201).json(competition);
    } catch (error) {
      console.error("Erro ao criar competição:", error); // Log de erro
      return res.status(400).json({ message: error.message });
    }
  }
}

export { CreateCompetitionController };
