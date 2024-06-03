import { Time } from "@prisma/client";
import prismaClient from "../../prisma";

class TimeRepository {

    async createTime (data: Omit<Time,'id_time'>) :Promise<Time>{
        return prismaClient.time.create({data})
    }
    async findTeamByUserId(id_usuario: string): Promise<Time | null> {
        return prismaClient.time.findFirst({
          where: { id_usuario }
        });
      }
    
      async findTeamById(id_time: string): Promise<Time | null> {
        return prismaClient.time.findUnique({
          where: { id_time }
        });
      }
    async updateTime(id:string,data: Partial<Time>): Promise<Time | null>{
        return prismaClient.time.update({where:{id_time: id},data});
    }
    async deleteTime(id:string): Promise<Time>{
        return prismaClient.time.delete({where:{id_time: id}});
    }

}
export{TimeRepository}
