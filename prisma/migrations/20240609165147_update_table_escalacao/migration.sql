/*
  Warnings:

  - The primary key for the `EscalacaoTime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_EscalacaoTime` on the `EscalacaoTime` table. All the data in the column will be lost.
  - Added the required column `formacao` to the `EscalacaoTime` table without a default value. This is not possible if the table is not empty.
  - The required column `id_escalacao` was added to the `EscalacaoTime` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "EscalacaoTime" DROP CONSTRAINT "EscalacaoTime_id_atleta_fkey";

-- DropForeignKey
ALTER TABLE "EscalacaoTime" DROP CONSTRAINT "EscalacaoTime_id_jogo_fkey";

-- DropForeignKey
ALTER TABLE "EscalacaoTime" DROP CONSTRAINT "EscalacaoTime_id_time_fkey";

-- AlterTable
ALTER TABLE "EscalacaoTime" DROP CONSTRAINT "EscalacaoTime_pkey",
DROP COLUMN "id_EscalacaoTime",
ADD COLUMN     "formacao" TEXT NOT NULL,
ADD COLUMN     "id_escalacao" TEXT NOT NULL,
ADD CONSTRAINT "EscalacaoTime_pkey" PRIMARY KEY ("id_escalacao");

-- AddForeignKey
ALTER TABLE "EscalacaoTime" ADD CONSTRAINT "EscalacaoTime_id_jogo_fkey" FOREIGN KEY ("id_jogo") REFERENCES "Jogo"("id_jogo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EscalacaoTime" ADD CONSTRAINT "EscalacaoTime_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EscalacaoTime" ADD CONSTRAINT "EscalacaoTime_id_atleta_fkey" FOREIGN KEY ("id_atleta") REFERENCES "Atleta"("id_atleta") ON DELETE CASCADE ON UPDATE CASCADE;
