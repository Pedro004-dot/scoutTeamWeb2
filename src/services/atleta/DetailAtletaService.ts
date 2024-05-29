import { AtletaRepository } from "../../repository/atleta/AtletaRepository";
import { PersonRepository } from "../../repository/pessoa/PersonRepository";
import { UserRepository } from "../../repository/user/UserRepository";

class AtletaDetailService{
    private userRepository : UserRepository;
    private personRepository: PersonRepository;
    private atletaRepository: AtletaRepository

    constructor(){
        this.userRepository = new UserRepository();
        this.personRepository = new PersonRepository();
        this.atletaRepository = new AtletaRepository();
    }
      async execute(id_usuario: string ){
        const atleta = await this.atletaRepository.findAtletaById(id_usuario)
        if (!atleta) {
            throw new Error("Atleta não encontrado");
          }
          try {
            const user = await this.userRepository.findUserById(id_usuario)
            const person = await this.personRepository.findPersonByUserId(id_usuario);
            return { user, person,atleta};
         } catch (error) {
            throw new Error("Atleta não encontrado");
         }
      }
}

export{AtletaDetailService}