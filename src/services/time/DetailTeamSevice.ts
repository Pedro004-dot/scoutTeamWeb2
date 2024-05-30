import { PersonRepository } from "../../repository/pessoa/PersonRepository";
import { TimeRepository } from "../../repository/time/TeamRepository";
import { UserRepository } from "../../repository/user/UserRepository";

class TeamDetailService{
    private userRepository : UserRepository;
    private personRepository: PersonRepository;
    private timeRepository: TimeRepository;

    constructor(){
        this.userRepository = new UserRepository();
        this.personRepository = new PersonRepository();
        this.timeRepository = new TimeRepository();
    }
      async execute(id_usuario: string ){
        const time = await this.timeRepository.findTimeById(id_usuario)
        if (!time) {
            throw new Error("Time não encontrado");
          }
          try {
            const user = await this.userRepository.findUserById(id_usuario)
            const person = await this.personRepository.findPersonByUserId(id_usuario);
            return { user, person,time};
         } catch (error) {
            throw new Error("Time não encontrado");
         }
      }
}

export{TeamDetailService}