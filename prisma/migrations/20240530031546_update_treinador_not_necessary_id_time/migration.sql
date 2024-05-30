-- DropForeignKey
ALTER TABLE "Treinador" DROP CONSTRAINT "Treinador_id_time_fkey";

-- AlterTable
ALTER TABLE "Treinador" ALTER COLUMN "id_time" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Treinador" ADD CONSTRAINT "Treinador_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE SET NULL ON UPDATE CASCADE;
