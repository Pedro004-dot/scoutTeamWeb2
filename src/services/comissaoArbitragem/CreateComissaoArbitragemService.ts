import { ComissaoArbitragem } from "@prisma/client";
import { ComissaoArbitragemRepository } from "../../repository/comissaoArbitragem/ComissaoArbitragemRepository";
import { PartidaRepository } from "../../repository/partida/PartidaRepository";
import { ArbitroRepository } from "../../repository/arbitro/ArbitroRepository";

interface ComissaoArbitragemRequest {
  id_partida: string;
  id_arbitro: string;
}

class CreateComissaoArbitragemService {
  private comissaoArbitragemRepository: ComissaoArbitragemRepository;
  private partidaRepository: PartidaRepository;
  private arbitroRepository: ArbitroRepository;

  constructor() {
    this.comissaoArbitragemRepository = new ComissaoArbitragemRepository();
    this.partidaRepository = new PartidaRepository();
    this.arbitroRepository = new ArbitroRepository();
  }

  async execute({ id_partida, id_arbitro }: ComissaoArbitragemRequest): Promise<ComissaoArbitragem> {
    // Verifique se a partida existe
    const partidaExists = await this.partidaRepository.getPartidaById(id_partida);
    if (!partidaExists) {
      throw new Error("Partida não encontrada");
    }

    // Verifique se o árbitro existe
    const arbitroExists = await this.arbitroRepository.findArbitroById(id_arbitro);
    if (!arbitroExists) {
      throw new Error("Árbitro não encontrado");
    }

    try {
      const comissaoArbitragem = await this.comissaoArbitragemRepository.createComissaoArbitragem({
        id_partida,
        id_arbitro
      });
      return comissaoArbitragem;
    } catch (error) {
      console.error("Erro ao criar comissão de arbitragem:", error);
      throw new Error("Não foi possível criar a comissão de arbitragem");
    }
  }
}

export { CreateComissaoArbitragemService };
