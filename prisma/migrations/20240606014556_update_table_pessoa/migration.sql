/*
  Warnings:

  - A unique constraint covering the columns `[id_usuario,nome_usuario]` on the table `Pessoa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario,nome_usuario]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome_usuario` to the `Pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_id_usuario_fkey";

-- DropIndex
DROP INDEX "Pessoa_id_usuario_key";

-- AlterTable
ALTER TABLE "Pessoa" ADD COLUMN     "nome_usuario" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_id_usuario_nome_usuario_key" ON "Pessoa"("id_usuario", "nome_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_id_usuario_nome_usuario_key" ON "Usuario"("id_usuario", "nome_usuario");

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_id_usuario_nome_usuario_fkey" FOREIGN KEY ("id_usuario", "nome_usuario") REFERENCES "Usuario"("id_usuario", "nome_usuario") ON DELETE CASCADE ON UPDATE CASCADE;
