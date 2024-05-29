import { Empresario } from "@prisma/client";
import prismaClient from "../../prisma";

class EmpresarioRepository {

    async createEmpresario (data: Omit<Empresario,'id_empresario'>) :Promise<Empresario>{
        return prismaClient.empresario.create({data})
    }
    async findEmpresarioById(id_usuario:string): Promise<Empresario | null>{
        return prismaClient.empresario.findFirst({ where: { id_usuario } });
    }
    async updateEmpresario(id:string,data: Partial<Empresario>): Promise<Empresario | null>{
        return prismaClient.empresario.update({where:{id_empresario: id},data});
    }
    async deleteEmpresario(id:string): Promise<Empresario>{
        return prismaClient.empresario.delete({where:{id_empresario: id}});
    }

}
export{EmpresarioRepository}
