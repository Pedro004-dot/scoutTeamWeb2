
import { UserRepository } from "../../repository/user/UserRepository";
import { PersonRepository } from "../../repository/pessoa/PersonRepository";

class UserDetailService{
  private userRepository: UserRepository;
  private personRepository: PersonRepository;

  constructor() {
    this.userRepository = new UserRepository();
    this.personRepository = new PersonRepository();
  }
    async execute(email: string ){
        const user = await this.userRepository.findUserByEmail(email);

        if (!user) {
          throw new Error("Usuário não encontrado");
        }
    
        try {
          const person = await this.personRepository.findPersonByUserId(user.id_usuario);
    
         return { user, person };
        } catch (error) {
          throw new Error("Erro ao encontrar usuario");
        }
        
    }
}
export {UserDetailService}