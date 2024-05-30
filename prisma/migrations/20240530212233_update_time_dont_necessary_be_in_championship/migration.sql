-- DropForeignKey
ALTER TABLE "Time" DROP CONSTRAINT "Time_id_competicao_fkey";

-- AlterTable
ALTER TABLE "Time" ALTER COLUMN "id_competicao" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Time" ADD CONSTRAINT "Time_id_competicao_fkey" FOREIGN KEY ("id_competicao") REFERENCES "Competicao"("id_competicao") ON DELETE SET NULL ON UPDATE CASCADE;
