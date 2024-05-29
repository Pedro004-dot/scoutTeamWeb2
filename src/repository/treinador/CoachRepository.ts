import { Treinador } from "@prisma/client";
import prismaClient from "../../prisma";

class TreinadorRepository {

    async createTreinador (data: Omit<Treinador,'id_treinador'>) :Promise<Treinador>{
        return prismaClient.treinador.create({data})
    }
    async findTreinadorById(id_usuario:string): Promise<Treinador | null>{
        return prismaClient.treinador.findFirst({ where: { id_usuario } });
    }
    async updateTreinador(id:string,data: Partial<Treinador>): Promise<Treinador | null>{
        return prismaClient.treinador.update({where:{id_treinador: id},data});
    }
    async deleteTreinador(id:string): Promise<Treinador>{
        return prismaClient.treinador.delete({where:{id_treinador: id}});
    }

}
export{TreinadorRepository}
