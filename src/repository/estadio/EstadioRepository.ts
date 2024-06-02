import {Estadio} from "@prisma/client"
import prismaClient from "../../prisma"

class EstadioRepository {
    async createEstadio(data: Omit<Estadio, 'id_estadio'>): Promise<Estadio> {
      return prismaClient.estadio.create({
        data
      });
    }
  
    async getEstadioById(id_estadio: string): Promise<Estadio | null> {
      return prismaClient.estadio.findUnique({
        where: { id_estadio }
      });
    }
  
    async updateEstadio(id_estadio: string, data: Partial<Estadio>): Promise<Estadio> {
      return prismaClient.estadio.update({
        where: { id_estadio },
        data
      });
    }
  
    async deleteEstadio(id_estadio: string): Promise<void> {
      await prismaClient.estadio.delete({
        where: { id_estadio }
      });
    }
  }
  export { EstadioRepository };