/*
  Warnings:

  - Added the required column `nome_campeonato` to the `Competicao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Competicao" ADD COLUMN     "nome_campeonato" TEXT NOT NULL;
