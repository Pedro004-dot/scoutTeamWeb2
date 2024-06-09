/*
  Warnings:

  - You are about to drop the column `id_jogo` on the `Evento` table. All the data in the column will be lost.
  - Added the required column `id_partida` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_time` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Evento" DROP CONSTRAINT "Evento_id_jogo_fkey";

-- AlterTable
ALTER TABLE "Evento" DROP COLUMN "id_jogo",
ADD COLUMN     "id_partida" TEXT NOT NULL,
ADD COLUMN     "id_time" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_id_partida_fkey" FOREIGN KEY ("id_partida") REFERENCES "Partida"("id_partida") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE RESTRICT ON UPDATE CASCADE;
