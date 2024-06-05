import {Arbitro} from "@prisma/client"
import prismaClient from "../../prisma";

class ArbitroRepository{
    async createArbitro (data: Omit<Arbitro,'id_arbitro'>): Promise<Arbitro>{
        return prismaClient.arbitro.create({data})
    }
    async findArbitroById(id_arbitro: string):Promise<Arbitro |null>{
        return prismaClient.arbitro.findFirst({where : {id_arbitro}})
    }
    async updateArbitro(id:string,data: Partial<Arbitro>): Promise<Arbitro | null>{
        return prismaClient.arbitro.update({where:{id_arbitro: id},data});
    }
    async deleteArbitro(id:string): Promise<Arbitro>{
        return prismaClient.arbitro.delete({where:{id_arbitro: id}});
    }
}
export {ArbitroRepository}