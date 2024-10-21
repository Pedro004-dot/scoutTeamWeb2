import prismaClient from "../../prisma";
import { hash } from "bcrypt";
import { Usuario } from "@prisma/client";
import { parseDate } from "../../utils/DateUtils";
import { UserRepository } from "../../repository/user/UserRepository";
import { parse } from "date-fns";
import { TipoPerfil } from "@prisma/client"; // Importando o enum definido pelo Prisma

interface UserRequest {
  nome_usuario: string;
  email: string;
  senha: string;
  perfil: TipoPerfil;  // Atualize o tipo de perfil para ser `TipoPerfil` ao invés de `string`
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

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userData: UserRequest): Promise<Usuario> {
    const {
      email,
      senha,
      perfil,
      nome_usuario,
      nome,
      cidade_endereco,
      estado_endereco,
      data_nascimento,
      nacionalidade,
      telefone_contato,
      foto,
    } = userData;

    if (!email || !senha) {
      throw new Error("Email e senha são obrigatórios");
    }

    // Verifica se o e-mail já está em uso
    const emailAlreadyExists = await this.userRepository.findUserByEmail(email);
    if (emailAlreadyExists) {
      throw new Error("Email já cadastrado");
    }

    // Verifica se o nome de usuário já está em uso
    const userNameAlreadyExists = await this.userRepository.findUserByUserName(nome_usuario);
    if (userNameAlreadyExists) {
      throw new Error("Nome de usuário já cadastrado");
    }

    // Hash da senha
    const passwordHash = await hash(senha, 8);
    let parsedDate;
    try {
      parsedDate = parse(data_nascimento, 'dd/MM/yyyy', new Date());
    } catch (error) {
      throw new Error("Formato de data de nascimento inválido. Use DD/MM/YYYY.");
    }
    try {
      // Criação do usuário
      const user = await this.userRepository.createUser({
        email,
        senha: passwordHash,
        perfil,
        nome_usuario,
        nome,
        cidade_endereco,
        estado_endereco,
        data_nascimento: parsedDate,
        nacionalidade,
        telefone_contato,
        foto: foto ?? null,
      });

      return user;
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw new Error("Não foi possível criar o usuário");
    }
  }
}

export { CreateUserService };
