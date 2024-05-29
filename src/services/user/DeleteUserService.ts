import prismaClient from "../../prisma";

import { PersonRepository } from "../../repository/pessoa/PersonRepository";
import { UserRepository } from "../../repository/user/UserRepository";

class DeleteUserService {
  private userRepository: UserRepository;
  private personRepository: PersonRepository;

  constructor() {
    this.userRepository = new UserRepository();
    this.personRepository = new PersonRepository();
  }

  async execute(userId: string): Promise<void> {
    const user = await this.userRepository.findUserById(userId);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    // Deletar a entrada na tabela Pessoa antes de deletar o usuário
    await this.personRepository.deletePersonByUserId(userId);

    // Deletar a entrada na tabela Usuario
    await this.userRepository.deleteUser(userId);
  }
}

export { DeleteUserService };
