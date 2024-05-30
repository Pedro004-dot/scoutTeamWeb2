import { Treinador } from "@prisma/client";
import { TreinadorRepository } from "../../repository/treinador/CoachRepository";

interface TreinadorRequest{
    id_time:         string;
    categoria:       string[];
    cref:            string;
    id_usuario:      string;

}
class CreateCoachService{
    private treinadorRepository: TreinadorRepository;

    constructor(){
        this.treinadorRepository = new TreinadorRepository();
    }

    async execute(timeData: TreinadorRequest): Promise<Treinador>{
        const {id_usuario,categoria,cref,id_time} = timeData;
        

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