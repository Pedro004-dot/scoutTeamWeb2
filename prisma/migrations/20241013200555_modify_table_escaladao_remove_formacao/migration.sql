/*
  Warnings:

  - You are about to drop the column `formacao` on the `EscalacaoTime` table. All the data in the column will be lost.
  - You are about to drop the column `id_jogo` on the `EscalacaoTime` table. All the data in the column will be lost.
  - Added the required column `id_partida` to the `EscalacaoTime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EscalacaoTime" DROP COLUMN "formacao",
DROP COLUMN "id_jogo",
ADD COLUMN     "id_partida" TEXT NOT NULL;
