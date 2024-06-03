/*
  Warnings:

  - You are about to drop the column `id_jogo` on the `Partida` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Jogo" DROP CONSTRAINT "Jogo_id_partida_fkey";

-- DropForeignKey
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_id_jogo_fkey";

-- AlterTable
ALTER TABLE "Partida" DROP COLUMN "id_jogo";

-- AddForeignKey
ALTER TABLE "Jogo" ADD CONSTRAINT "Jogo_id_partida_fkey" FOREIGN KEY ("id_partida") REFERENCES "Partida"("id_partida") ON DELETE RESTRICT ON UPDATE CASCADE;
