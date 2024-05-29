import prismaClient from "../../prisma";
import { UserRepository } from "../../repository/user/UserRepository";
import { PersonRepository } from "../../repository/pessoa/PersonRepository";

interface UpdateUserRequest {
    email: string;
    nome_usuario?: string;
    cidade_endereco?: string;
    estado_endereco?: string;
    nome?: string;
    foto?: string;
    telefone_contato?: string;
  }
class UpdateUserService{
  private userRepository: UserRepository;
  private personRepository: PersonRepository;

  constructor() {
    this.userRepository = new UserRepository();
    this.personRepository = new PersonRepository();
  }
    async execute({ email, nome_usuario, cidade_endereco, estado_endereco, nome, foto, telefone_contato }: UpdateUserRequest){
        const user = await this.userRepository.findUserByEmail(email);

        if (!user) {
            throw new Error("Usuário não encontrado");
          }

        try {
           const updatedUser = await this.userRepository.updateUser(user.id_usuario, {
            nome_usuario,
            });

            const updatedPerson = await this.personRepository.updatePerson(user.id_usuario, {
            cidade_endereco,
            estado_endereco,
            nome,
            foto,
            telefone_contato,
            });

            return { updatedUser, updatedPerson };
        } catch (error) {
            console.log(error)
        }
    }
}
export {UpdateUserService}