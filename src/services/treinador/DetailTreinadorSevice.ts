import { PersonRepository } from "../../repository/pessoa/PersonRepository";
import { TreinadorRepository } from "../../repository/treinador/CoachRepository";
import { UserRepository } from "../../repository/user/UserRepository";

class TreinadorDetailService{
    private userRepository : UserRepository;
    private personRepository: PersonRepository;
    private treinadorRepository: TreinadorRepository

    constructor(){
        this.userRepository = new UserRepository();
        this.personRepository = new PersonRepository();
        this.treinadorRepository = new TreinadorRepository();
    }
      async execute(id_usuario: string ){
        const treinador = await this.treinadorRepository.findTreinadorById(id_usuario)
        if (!treinador) {
            throw new Error("Treinador não encontrado");
          }
          try {
            const user = await this.userRepository.findUserById(id_usuario)
            const person = await this.personRepository.findPersonByUserId(id_usuario);
            return { user, person,treinador};
         } catch (error) {
            throw new Error("Treinador não encontrado");
         }
      }
}

export{TreinadorDetailService}