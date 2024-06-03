import prismaClient from "../../prisma";
import { hash } from "bcrypt";

import { Usuario, Pessoa } from "@prisma/client";
import { parseDate } from "../../utils/DateUtils";
import { UserRepository } from "../../repository/user/UserRepository";
import { PersonRepository } from "../../repository/pessoa/PersonRepository";

interface UserRequest {
  nome_usuario: string;
  email: string;
  senha: string;
  perfil: string;
}

interface PersonRequest {
  cidade_endereco: string;
  estado_endereco: string;
  data_nascimento: string;
  nacionalidade: string;
  telefone_contato: string;
  foto?: string;
  nome: string;
}

class CreateUserService {
  private userRepository: UserRepository;
  private personRepository: PersonRepository;

  constructor() {
    this.userRepository = new UserRepository();
    this.personRepository = new PersonRepository();
  }

  async execute(userData: UserRequest, personData: PersonRequest): Promise<Usuario> {
    const { email, senha, perfil, nome_usuario } = userData;

    if (!email) {
      throw new Error("Email ou senha incorreto");
    }

    const userAlreadyExists = await this.userRepository.findUserByEmail(email);
    if (userAlreadyExists) {
      throw new Error("Usuário já existe");
    }

    const passwordHash = await hash(senha, 8);

    try {
      const user = await prismaClient.$transaction(async (prisma) => {
        const createdUser = await prisma.usuario.create({
          data: {
            email,
            senha: passwordHash,
            perfil,
            nome_usuario
          }
        });

        await prisma.pessoa.create({
          data: {
            ...personData,
            data_nascimento: parseDate(personData.data_nascimento),
            id_usuario: createdUser.id_usuario,
            foto: personData.foto ?? null
          }
        });

        return createdUser;
      });

      return user;
    } catch (error) {
      console.error("Erro ao criar usuário e pessoa:", error);
      throw new Error("Não foi possível criar o usuário");
    }
  }
}

export { CreateUserService };
