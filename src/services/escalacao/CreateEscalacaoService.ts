import { EscalacaoTime } from "@prisma/client";
import { EscalacaoRepository } from "../../repository/escalacao/EscalacaoRepository";
import { JogoRepository } from "../../repository/jogo/JogoRepository";
import { TimeRepository } from "../../repository/time/TeamRepository";
import { AtletaRepository } from "../../repository/atleta/AtletaRepository";

interface EscalacaoRequest {
  id_jogo: string;
  id_time: string;
  formacao: string;
  id_atletas: string[];
}

class CreateEscalacaoService {
  private escalacaoRepository: EscalacaoRepository;
  private jogoRepository: JogoRepository;
  private timeRepository: TimeRepository;
  private atletaRepository: AtletaRepository;

  constructor() {
    this.escalacaoRepository = new EscalacaoRepository();
    this.jogoRepository = new JogoRepository();
    this.timeRepository = new TimeRepository();
    this.atletaRepository = new AtletaRepository();
  }

  async execute({ id_jogo, id_time,formacao,id_atletas }: EscalacaoRequest): Promise<EscalacaoTime[]> {
    // Verifica se o jogo existe
    const jogoExists = await this.jogoRepository.getJogoById(id_jogo);
    if (!jogoExists) {
      throw new Error("Jogo não existe");
    }

    // Verifica se o time existe
    const timeExists = await this.timeRepository.findTeamById(id_time);
    if (!timeExists) {
      throw new Error("Time não existe");
    }

    // Verifica se os atletas existem e pertencem ao time
    for (const id_atleta of id_atletas) {
      const atletaExists = await this.atletaRepository.findAtletaById(id_atleta);
      if (!atletaExists || atletaExists.id_time !== id_time) {
        throw new Error(`Atleta ${id_atleta} não pertence ao time ${id_time}`);
      }
    }

    
    const posicoes = this.getPosicoesPorFormacao(formacao, id_atletas.length);

    // Cria as escalações
    const escalacoes = await Promise.all(
      id_atletas.map((id_atleta, index) => {
        return this.escalacaoRepository.createEscalacao({
          id_jogo,
          id_time,
          formacao,
          id_atleta,
          posicao: posicoes[index],
        });
      })
    );

    return escalacoes;
  }

  private getPosicoesPorFormacao(formacao: string, numAtletas: number): string[] {
    const posicoes: { [key: string]: string[] } = {
      "4-3-3": ["Goleiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Meia", "Meia", "Meia", "Atacante", "Atacante", "Atacante"],
      "4-4-2": ["Goleiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Volante", "Volante", "Meia", "Meia", "Atacante", "Atacante"],
      "3-5-2": ["Goleiro", "Zagueiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Volante", "Meia", "Meia", "Atacante", "Atacante"],
      "4-2-3-1": ["Goleiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Volante", "Volante", "Meia", "Meia", "Meia", "Atacante"],
      "4-1-4-1": ["Goleiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Volante", "Meia", "Meia", "Meia", "Meia", "Atacante"],
      "3-4-3": ["Goleiro", "Zagueiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Meia", "Meia", "Atacante", "Atacante", "Atacante"],
      // Adicione outras formações conforme necessário
    };

    return posicoes[formacao] || Array(numAtletas).fill("Posição Desconhecida");
  }
}

export { CreateEscalacaoService };

