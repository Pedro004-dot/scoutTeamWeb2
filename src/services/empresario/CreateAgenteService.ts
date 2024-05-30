import { EmpresarioRepository } from "../../repository/empresario/agente";
import { Empresario } from "@prisma/client";
interface EmpresarioRequest{
    id_usuario:    string
    categoria:     string[]
}
class CreateAgentService{
    private empresarioRepository: EmpresarioRepository;

    constructor(){
        this.empresarioRepository = new EmpresarioRepository();
    }

    async execute(empresarioData: EmpresarioRequest): Promise<Empresario>{
        const {id_usuario,categoria} = empresarioData;


        try {
            const empresario = await this.empresarioRepository.createEmpresario({
                id_usuario,
                categoria
            })
            return empresario
        } catch (error) {
            console.error("Erro ao criar o empresario:", error); 
            throw new Error("Não foi possível criar o empresario");
        }
    }
}

export {CreateAgentService}