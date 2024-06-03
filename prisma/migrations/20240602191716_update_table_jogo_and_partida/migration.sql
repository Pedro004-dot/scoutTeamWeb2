/*
  Warnings:

  - You are about to drop the column `id_competicao` on the `Jogo` table. All the data in the column will be lost.
  - Added the required column `id_competicao` to the `Partida` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Jogo" DROP CONSTRAINT "Jogo_id_competicao_fkey";

-- AlterTable
ALTER TABLE "Jogo" DROP COLUMN "id_competicao";

-- AlterTable
ALTER TABLE "Partida" ADD COLUMN     "id_competicao" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_id_competicao_fkey" FOREIGN KEY ("id_competicao") REFERENCES "Competicao"("id_competicao") ON DELETE RESTRICT ON UPDATE CASCADE;
