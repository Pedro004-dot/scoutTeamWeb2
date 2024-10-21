/*
  Warnings:

  - Added the required column `formacao` to the `EscalacaoTime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EscalacaoTime" ADD COLUMN     "formacao" TEXT NOT NULL;
