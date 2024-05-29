import { OrganizerRepository } from "../../repository/organizador/OrganizerRepository";
import { Organizador } from "@prisma/client";

interface OrganizerRequest {
  id_usuario: string;
}

class CreateOrganizerService{
  private organizerRepository: OrganizerRepository;
  constructor() {
    this.organizerRepository = new OrganizerRepository();
  }
  async execute(organizerData: OrganizerRequest) :Promise<Organizador> {
    // const organizador  =  await this.organizerRepository.findOrganizerById(organizerData.id_usuario)
    // if(organizador){
    //   throw new Error("Organizador já existe!");
    // }
    try {
      return this.organizerRepository.createOrganizer(organizerData);
    } catch (error) {
      throw  new Error("Nao foi possivel criar o organizador");
    }
        
      }
}

export{CreateOrganizerService}

