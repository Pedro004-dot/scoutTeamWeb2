/*
  Warnings:

  - You are about to drop the column `id_usuario` on the `Pessoa` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nome_usuario]` on the table `Pessoa` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_id_usuario_nome_usuario_fkey";

-- DropIndex
DROP INDEX "Pessoa_id_usuario_nome_usuario_key";

-- DropIndex
DROP INDEX "Usuario_id_usuario_nome_usuario_key";

-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "id_usuario";

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_nome_usuario_key" ON "Pessoa"("nome_usuario");

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_nome_usuario_fkey" FOREIGN KEY ("nome_usuario") REFERENCES "Usuario"("nome_usuario") ON DELETE CASCADE ON UPDATE CASCADE;
