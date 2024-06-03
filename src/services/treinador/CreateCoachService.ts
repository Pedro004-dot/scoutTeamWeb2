import { Treinador } from "@prisma/client";
import { TreinadorRepository } from "../../repository/treinador/CoachRepository";
import { UserRepository } from "../../repository/user/UserRepository";
interface TreinadorRequest{
    id_time:         string;
    categoria:       string[];
    cref:            string;
    id_usuario:      string;

}
class CreateCoachService{
    private treinadorRepository: TreinadorRepository;
    private userRepository        :  UserRepository;

    constructor(){
        this.treinadorRepository = new TreinadorRepository();
        this.userRepository         = new UserRepository();
    }

    async execute(timeData: TreinadorRequest): Promise<Treinador>{
        const {id_usuario,categoria,cref,id_time} = timeData;

        const user = await this.userRepository.findUserById(id_usuario);
        if (!user) {
          throw new Error("Usuário não existe");
        }
    
        
        if (user.perfil !== "Treinador") {
          throw new Error("Usuário não tem o perfil de Treinador");
        }

        const existingTreinador = await this.treinadorRepository.findTreinadorById(id_usuario);
        if (existingTreinador) {
          throw new Error("Usuário já possui um perfil de Treinador");
        }
        

        try {
            const treinador = await this.treinadorRepository.createTreinador({
                id_time,
                id_usuario,
                categoria,
                cref,
            });
            return treinador
        } catch (error) {
            console.error("Erro ao criar o treinador:", error); 
            throw new Error("Não foi possível criar o treinado");
        }
    }
}

export {CreateCoachService}