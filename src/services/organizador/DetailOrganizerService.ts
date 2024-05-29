import { OrganizerRepository } from "../../repository/organizador/OrganizerRepository";
import { UserRepository } from "../../repository/user/UserRepository";
import { PersonRepository } from "../../repository/pessoa/PersonRepository";

class OrganizerDetailService{
    private userRepository : UserRepository;
    private personRepository: PersonRepository;
    private organizerRepository: OrganizerRepository;

    constructor() {
        this.userRepository = new UserRepository();
        this.personRepository = new PersonRepository();
        this.organizerRepository = new OrganizerRepository();
      }

      async execute(id_usuario: string){
        const organizer = await this.organizerRepository.findOrganizerById(id_usuario)

        if (!organizer) {
            throw new Error("Organizador não encontrado");
          }

        try {
           const user = await this.userRepository.findUserById(id_usuario)
           const person = await this.personRepository.findPersonByUserId(id_usuario);
           return { user, person,organizer};
        } catch (error) {
          throw new Error("Organizador não encontrado");
        }
      }


}

export {OrganizerDetailService}