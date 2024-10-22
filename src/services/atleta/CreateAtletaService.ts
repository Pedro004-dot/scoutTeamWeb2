import { Atleta } from "@prisma/client";
import { AtletaRepository } from "../../repository/atleta/AtletaRepository";
import { UserRepository } from "../../repository/user/UserRepository";
import { EmpresarioRepository } from "../../repository/empresario/agente";
import { TimeRepository } from "../../repository/time/TeamRepository";

interface AtletaRequest {
  id_usuario: string;
  id_time: string;
  id_empresario: string;
  altura: number;
  peso: number;
  score: number;
  caracteristicasJogo: string[];
  posicoes: string[];
}

class CreateAtletaService {
  private atletaRepository      :  AtletaRepository;
  private userRepository        :  UserRepository;
  private timeRepository        :  TimeRepository;
  private empresarioRepository  :  EmpresarioRepository;

  constructor() {
    this.atletaRepository       = new AtletaRepository();
    this.userRepository         = new UserRepository();
    this.timeRepository         = new TimeRepository();
    this.empresarioRepository   = new EmpresarioRepository();
  }

  async execute(atletaData: AtletaRequest): Promise<Atleta> {
    const { id_usuario, id_time, id_empresario, altura, peso, score, caracteristicasJogo, posicoes } = atletaData;

    const user = await this.userRepository.findUserById(id_usuario);
    if (!user) {
      throw new Error("Usuário não existe");
    }

    // Verifique se o perfil do usuário é "atleta"
    if (user.perfil !== "ATLETA") {
      throw new Error("Usuário não tem o perfil de atleta");
    }

    // Verifique se o usuário já tem um perfil de atleta
    const existingAtleta = await this.atletaRepository.findAtletaById(id_usuario);
    if (existingAtleta) {
      throw new Error("Usuário já possui um perfil de atleta");
    }

    // Array de promessas para verificações adicionais
    const promises = [];

    // Verifique se o time existe, se id_time for fornecido
    if (id_time && id_time.length > 0) {
      promises.push(this.timeRepository.findTeamById(id_time));
    }

    // Verifique se o empresário existe, se id_empresario for fornecido
    if (id_empresario && id_empresario.length > 0) {
      promises.push(this.empresarioRepository.findEmpresarioById(id_empresario));
    }

    // Execute as promessas de verificação em paralelo
    const [teamAlreadyExists, empresarioAlreadyExists] = await Promise.all(promises);

    // Verifique os resultados das promessas
    if (id_time && id_time.length > 0 && !teamAlreadyExists) {
      throw new Error("Time não existe");
    }

    if (id_empresario && id_empresario.length > 0 && !empresarioAlreadyExists) {
      throw new Error("Empresário não existe");
    }
    
   

    try {
      const atleta = await this.atletaRepository.createAtleta({
        id_usuario,
        id_time,
        id_empresario,
        altura,
        peso,
        score,
        caracteristicasJogo,
        posicoes
      });
      return atleta;
    } catch (error) {
      console.error("Erro ao criar atleta:", error); 
      throw new Error("Não foi possível criar o atleta");
    }
  }
}

export { CreateAtletaService };
