/*
  Warnings:

  - You are about to drop the column `id_times` on the `Competicao` table. All the data in the column will be lost.
  - You are about to drop the column `id_competicao` on the `Time` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Time" DROP CONSTRAINT "Time_id_competicao_fkey";

-- AlterTable
ALTER TABLE "Competicao" DROP COLUMN "id_times",
ADD COLUMN     "times_ids" TEXT[];

-- AlterTable
ALTER TABLE "Time" DROP COLUMN "id_competicao";
