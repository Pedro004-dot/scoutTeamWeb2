import { OrganizerRepository } from "../../repository/organizador/OrganizerRepository";
import { Organizador } from "@prisma/client";
import { UserRepository } from "../../repository/user/UserRepository";
interface OrganizerRequest {
  id_usuario: string;
}

class CreateOrganizerService{
  private organizerRepository: OrganizerRepository;
  private userRepository        :  UserRepository;
  constructor() {
    this.organizerRepository = new OrganizerRepository();
    this.userRepository         = new UserRepository();
  }
  async execute(organizerData: OrganizerRequest) :Promise<Organizador> {
   const {id_usuario} = organizerData;
   const user = await this.userRepository.findUserById(id_usuario);
    if (!user) {
      throw new Error("Usuário não existe");
    }

    
    if (user.perfil !== "Organizador") {
      throw new Error("Usuário não tem o perfil de organizador");
    }

    
    const existingOrganizador = await this.organizerRepository.findOrganizerByUserId(id_usuario);
    if (existingOrganizador) {
      throw new Error("Usuário já possui um perfil de organizador");
    }
    try {
      return this.organizerRepository.createOrganizer(organizerData);
    } catch (error) {
      throw  new Error("Nao foi possivel criar o organizador");
    }
        
      }
}

export{CreateOrganizerService}

