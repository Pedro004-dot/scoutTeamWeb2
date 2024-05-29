/*
  Warnings:

  - You are about to drop the column `pontuacao` on the `Atleta` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Atleta" DROP CONSTRAINT "Atleta_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Empresario" DROP CONSTRAINT "Empresario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Organizador" DROP CONSTRAINT "Organizador_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Time" DROP CONSTRAINT "Time_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Treinador" DROP CONSTRAINT "Treinador_id_usuario_fkey";

-- AlterTable
ALTER TABLE "Atleta" DROP COLUMN "pontuacao",
ADD COLUMN     "score" DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organizador" ADD CONSTRAINT "Organizador_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Time" ADD CONSTRAINT "Time_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treinador" ADD CONSTRAINT "Treinador_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atleta" ADD CONSTRAINT "Atleta_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Empresario" ADD CONSTRAINT "Empresario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;
