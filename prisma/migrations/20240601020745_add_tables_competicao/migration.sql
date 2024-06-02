/*
  Warnings:

  - Added the required column `formato_campeonato` to the `Competicao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade_times` to the `Competicao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Competicao" ADD COLUMN     "formato_campeonato" TEXT NOT NULL,
ADD COLUMN     "id_times" TEXT[],
ADD COLUMN     "quantidade_times" TEXT NOT NULL;
