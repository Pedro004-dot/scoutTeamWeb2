import { Time } from "@prisma/client";
import { TimeRepository } from "../../repository/time/TeamRepository";
import { UserRepository } from "../../repository/user/UserRepository";
import { CompetitionRepository } from "../../repository/competicao/CompeticaoRepository";

interface TimeRequest{
    categorias:     string[]
    modelo_uniforme: string
    escudo:         string
    id_usuario:     string
}
class CreateTeamService{
    private timeRepository               :  TimeRepository;
    private userRepository               :  UserRepository;

    constructor(){
        this.timeRepository         = new TimeRepository();
        this.userRepository         = new UserRepository();
    }

    async execute(timeData: TimeRequest): Promise<Time>{
        const {id_usuario,categorias,escudo,modelo_uniforme} = timeData;

    const user = await this.userRepository.findUserById(id_usuario);
    if (!user) {
      throw new Error("Usuário não existe");
    }

   
    if (user.perfil !== "Time") {
      throw new Error("Usuário não tem o perfil de time");
    }

    
    const existingTime = await this.timeRepository.findTeamByUserId(id_usuario);
    if (existingTime) {
      throw new Error("Usuário já possui um perfil de time");
    }

        try {
            const time = await this.timeRepository.createTime({
                id_usuario,
                categorias,
                escudo,
                modelo_uniforme
            })
            return time
        } catch (error) {
            console.error("Erro ao criar o time:", error); 
            throw new Error("Não foi possível criar o time");
        }
    }
}

export {CreateTeamService}