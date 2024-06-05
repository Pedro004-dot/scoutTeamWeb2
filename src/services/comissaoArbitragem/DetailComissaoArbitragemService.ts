import { ComissaoArbitragem } from "@prisma/client";
import { ComissaoArbitragemRepository } from "../../repository/comissaoArbitragem/ComissaoArbitragemRepository";

class DetailComissaoArbitragemService {
  private comissaoArbitragemRepository: ComissaoArbitragemRepository;

  constructor() {
    this.comissaoArbitragemRepository = new ComissaoArbitragemRepository();
  }

  async execute(id_partida: string): Promise<ComissaoArbitragem[]> {
    const comissaoArbitragem = await this.comissaoArbitragemRepository.findComissaoArbitragemByPartidaId(id_partida);
    return comissaoArbitragem;
  }
}

export { DetailComissaoArbitragemService };
