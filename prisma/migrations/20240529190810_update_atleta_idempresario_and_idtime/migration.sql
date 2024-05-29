-- DropForeignKey
ALTER TABLE "Atleta" DROP CONSTRAINT "Atleta_id_empresario_fkey";

-- DropForeignKey
ALTER TABLE "Atleta" DROP CONSTRAINT "Atleta_id_time_fkey";

-- AlterTable
ALTER TABLE "Atleta" ALTER COLUMN "id_time" DROP NOT NULL,
ALTER COLUMN "id_empresario" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Atleta" ADD CONSTRAINT "Atleta_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atleta" ADD CONSTRAINT "Atleta_id_empresario_fkey" FOREIGN KEY ("id_empresario") REFERENCES "Empresario"("id_empresario") ON DELETE SET NULL ON UPDATE CASCADE;
