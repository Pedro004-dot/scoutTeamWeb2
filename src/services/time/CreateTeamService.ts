import { Time } from "@prisma/client";
import { TimeRepository } from "../../repository/time/TeamRepository";
interface TimeRequest{
    categorias:     string[]
    modelo_uniforme: string
    escudo:         string
    id_usuario:     string
    id_competicao:  string
}
class CreateTeamService{
    private timeRepository: TimeRepository;

    constructor(){
        this.timeRepository = new TimeRepository();
    }

    async execute(timeData: TimeRequest): Promise<Time>{
        const {id_usuario,categorias,escudo,modelo_uniforme,id_competicao} = timeData;
        

        try {
            const time = await this.timeRepository.createTime({
                id_competicao,
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