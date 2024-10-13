/*
  Warnings:

  - You are about to drop the `Jogo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AtletaJogo" DROP CONSTRAINT "AtletaJogo_id_jogo_fkey";

-- DropForeignKey
ALTER TABLE "EscalacaoTime" DROP CONSTRAINT "EscalacaoTime_id_jogo_fkey";

-- DropForeignKey
ALTER TABLE "Jogo" DROP CONSTRAINT "Jogo_id_partida_fkey";

-- DropForeignKey
ALTER TABLE "Jogo" DROP CONSTRAINT "Jogo_id_time_fkey";

-- DropTable
DROP TABLE "Jogo";
