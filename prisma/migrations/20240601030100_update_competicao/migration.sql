/*
  Warnings:

  - You are about to drop the column `id_organizador` on the `Competicao` table. All the data in the column will be lost.
  - Added the required column `id_usuario` to the `Competicao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Competicao" DROP CONSTRAINT "Competicao_id_organizador_fkey";

-- AlterTable
ALTER TABLE "Competicao" DROP COLUMN "id_organizador",
ADD COLUMN     "id_usuario" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Competicao" ADD CONSTRAINT "Competicao_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
