import { EmpresarioRepository } from "../../repository/empresario/agente";
import { UserRepository } from "../../repository/user/UserRepository";
import { Empresario } from "@prisma/client";
interface EmpresarioRequest{
    id_usuario:    string
    categoria:     string[]
}
class CreateAgentService{
    private empresarioRepository: EmpresarioRepository;
    private userRepository        :  UserRepository;

    constructor(){
        this.empresarioRepository = new EmpresarioRepository();
        this.userRepository         = new UserRepository();
    }

    async execute(empresarioData: EmpresarioRequest): Promise<Empresario>{
        const {id_usuario,categoria} = empresarioData;
        const user = await this.userRepository.findUserById(id_usuario);
        if (!user) {
        throw new Error("Usuário não existe");
        }

        
        if (user.perfil !== "Atleta") {
        throw new Error("Usuário não tem o perfil de empresario");
        }

        
        const existingEmpresario = await this.empresarioRepository.findEmpresarioById(id_usuario);
        if (existingEmpresario) {
        throw new Error("Usuário já possui um perfil de empresario");
        
        }
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