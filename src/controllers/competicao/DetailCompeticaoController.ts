import { Competicao } from "@prisma/client";
import { Request, Response } from "express";
import { CompeticaoDetailService } from "../../services/competicao/DetailCompeticaoService";

class CompeticaoDetailController {
    async handle(req: Request, res: Response): Promise<Response> {
      const { id_competicao } = req.params;
  
      const getCompetitionDetailService = new CompeticaoDetailService();
  
      try {
        const competition = await getCompetitionDetailService.execute(id_competicao);
        return res.json(competition);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }
  }
  
  export { CompeticaoDetailController };