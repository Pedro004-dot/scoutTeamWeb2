/*
  Warnings:

  - You are about to drop the column `nome_usuario` on the `Pessoa` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_usuario]` on the table `Pessoa` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_usuario` to the `Pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_nome_usuario_fkey";

-- DropIndex
DROP INDEX "Pessoa_nome_usuario_key";

-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "nome_usuario",
ADD COLUMN     "id_usuario" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_id_usuario_key" ON "Pessoa"("id_usuario");

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;
