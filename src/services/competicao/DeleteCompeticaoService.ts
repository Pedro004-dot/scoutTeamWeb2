import { CompetitionRepository } from "../../repository/competicao/CompeticaoRepository";

class DeleteCompetitionService {
  private competitionRepository: CompetitionRepository;

  constructor() {
    this.competitionRepository = new CompetitionRepository();
  }

  async execute(id_competicao: string): Promise<void> {
    try {
      await this.competitionRepository.deleteCompetition(id_competicao);
    } catch (error) {
      console.error("Erro ao excluir competição:", error);
      throw new Error("Não foi possível excluir a competição");
    }
  }
}

export { DeleteCompetitionService };
