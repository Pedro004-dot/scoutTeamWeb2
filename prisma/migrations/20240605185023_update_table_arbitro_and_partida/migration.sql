/*
  Warnings:

  - You are about to drop the column `id_partida` on the `Arbitro` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Arbitro" DROP CONSTRAINT "Arbitro_id_partida_fkey";

-- AlterTable
ALTER TABLE "Arbitro" DROP COLUMN "id_partida";

-- CreateTable
CREATE TABLE "ComissaoArbitragem" (
    "id_partida" TEXT NOT NULL,
    "id_arbitro" TEXT NOT NULL,

    CONSTRAINT "ComissaoArbitragem_pkey" PRIMARY KEY ("id_partida","id_arbitro")
);

-- AddForeignKey
ALTER TABLE "ComissaoArbitragem" ADD CONSTRAINT "ComissaoArbitragem_id_partida_fkey" FOREIGN KEY ("id_partida") REFERENCES "Partida"("id_partida") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComissaoArbitragem" ADD CONSTRAINT "ComissaoArbitragem_id_arbitro_fkey" FOREIGN KEY ("id_arbitro") REFERENCES "Arbitro"("id_arbitro") ON DELETE RESTRICT ON UPDATE CASCADE;
