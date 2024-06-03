import { Atleta } from "@prisma/client";
import prismaClient from "../../prisma";

class AtletaRepository {

    async createAtleta (data: Omit<Atleta,'id_atleta'>) :Promise<Atleta>{
        return prismaClient.atleta.create({data})
    }
    async findAtletaById(id_usuario:string): Promise<Atleta | null>{
        return prismaClient.atleta.findFirst({ where: { id_usuario },
            include:{
                Usuario:true
        } });
    }
    async updateAtleta(id:string,data: Partial<Atleta>): Promise<Atleta | null>{
        return prismaClient.atleta.update({where:{id_atleta: id},data});
    }
    async deleteAtleta(id:string): Promise<Atleta>{
        return prismaClient.atleta.delete({where:{id_atleta: id}});
    }

}
export{AtletaRepository}
