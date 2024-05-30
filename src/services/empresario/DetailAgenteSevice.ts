import { EmpresarioRepository } from "../../repository/empresario/agente";
import { PersonRepository } from "../../repository/pessoa/PersonRepository";
import { UserRepository } from "../../repository/user/UserRepository";

class EmpresarioDetailService{
    private userRepository : UserRepository;
    private personRepository: PersonRepository;
    private empresarioRepository: EmpresarioRepository;

    constructor(){
        this.userRepository = new UserRepository();
        this.personRepository = new PersonRepository();
        this.empresarioRepository = new EmpresarioRepository();
    }
      async execute(id_usuario: string ){
        const empresario = await this.empresarioRepository.findEmpresarioById(id_usuario)
        if (!empresario) {
            throw new Error("Empresario não encontrado");
          }
          try {
            const user = await this.userRepository.findUserById(id_usuario)
            const person = await this.personRepository.findPersonByUserId(id_usuario);
            return { user, person,empresario};
         } catch (error) {
            throw new Error("Empresario não encontrado");
         }
      }
}

export{EmpresarioDetailService}