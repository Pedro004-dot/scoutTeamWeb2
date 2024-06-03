import { Competicao } from "@prisma/client";
import { CompetitionRepository } from "../../repository/competicao/CompeticaoRepository";


class CompeticaoDetailService {
    private competitionRepository: CompetitionRepository;
  
    constructor() {
      this.competitionRepository = new CompetitionRepository();
    }
  
    async execute(id_competicao: string): Promise<Competicao | null> {
      return this.competitionRepository.getCompetitionDetail(id_competicao);
    }
  }
  
  export { CompeticaoDetailService };