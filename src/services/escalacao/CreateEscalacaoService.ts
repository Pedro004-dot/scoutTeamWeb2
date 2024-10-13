import { EscalacaoTime } from "@prisma/client";
import { EscalacaoRepository } from "../../repository/escalacao/EscalacaoRepository";
import { TimeRepository } from "../../repository/time/TeamRepository";
import { AtletaRepository } from "../../repository/atleta/AtletaRepository";
import { PartidaRepository } from "../../repository/partida/PartidaRepository";
import { Evento, PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();
interface EscalacaoRequest {
  id_partida: string;
  id_time: string;
  // formacao: string;
  id_atleta: string;
  posicao : string;
}

class CreateEscalacaoService {
  private escalacaoRepository: EscalacaoRepository;
  private partidaRepository: PartidaRepository;
  private timeRepository: TimeRepository;
  private atletaRepository: AtletaRepository;

  constructor() {
    this.escalacaoRepository = new EscalacaoRepository();
    this.partidaRepository = new PartidaRepository();
    this.timeRepository = new TimeRepository();
    this.atletaRepository = new AtletaRepository();
  }

  async execute({ id_partida, id_time,id_atleta ,posicao }: EscalacaoRequest): Promise<EscalacaoTime> {
    // Verifica se o jogo existe
    const jogoExists = await this.partidaRepository.getPartidaById(id_partida);
    if (!jogoExists) {
      throw new Error("Jogo não existe");
    }

    // Verifica se o time existe
    const timeExists = await this.timeRepository.findTeamById(id_time);
    if (!timeExists) {
      throw new Error("Time não existe");
    }

    // Verifica se os atletas existem e pertencem ao time
    // for (const id_atleta of id_atletas) {
    //   const atletaExists = await this.atletaRepository.findAtletaById(id_atleta);
    //   if (!atletaExists || atletaExists.id_time !== id_time) {
    //     throw new Error(`Atleta ${id_atleta} não pertence ao time ${id_time}`);
    //   }
    // }
    const athleteExists = await prismaClient.atleta.findUnique({
      where: { id_atleta }
    });
    if (!athleteExists) {

      throw new Error("Atleta não existe");
    }
    
  
  try {
    const escalacao = await this.escalacaoRepository.createEscalacao({
      posicao,
      id_atleta,
      id_partida,
      id_time
    });

    return escalacao;
  } catch (error) {
    console.log(`Erro: ${error} ` )
    throw new Error("Não foi possível criar a escalacao");
  }
}
}

 

export { CreateEscalacaoService };

 // private getPosicoesPorFormacao(formacao: string, numAtletas: number): string[] {
  //   const posicoes: { [key: string]: string[] } = {
  //     "4-3-3": ["Goleiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Meia", "Meia", "Meia", "Atacante", "Atacante", "Atacante"],
  //     "4-4-2": ["Goleiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Volante", "Volante", "Meia", "Meia", "Atacante", "Atacante"],
  //     "3-5-2": ["Goleiro", "Zagueiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Volante", "Meia", "Meia", "Atacante", "Atacante"],
  //     "4-2-3-1": ["Goleiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Volante", "Volante", "Meia", "Meia", "Meia", "Atacante"],
  //     "4-1-4-1": ["Goleiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Volante", "Meia", "Meia", "Meia", "Meia", "Atacante"],
  //     "3-4-3": ["Goleiro", "Zagueiro", "Zagueiro", "Zagueiro", "Lateral Direito", "Lateral Esquerdo", "Meia", "Meia", "Atacante", "Atacante", "Atacante"],
  //     // Adicione outras formações conforme necessário
  //   };

  //   return posicoes[formacao] || Array(numAtletas).fill("Posição Desconhecida");
  // }
  // const posicoes = this.getPosicoesPorFormacao(formacao, id_atletas.length);

    // Cria as escalações
  //   const escalacoes = await Promise.all(
  //     id_atletas.map((id_atleta, index) => {
  //       return this.escalacaoRepository.createEscalacao({
  //         id_partida,
  //         id_time,      
  //         id_atleta,
  //         posicao
  //       });
  //     })
  //   );

  //   return escalacoes;
  // }