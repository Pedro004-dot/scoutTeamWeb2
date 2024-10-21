/*
  Warnings:

  - You are about to drop the column `criado_em` on the `Comentario` table. All the data in the column will be lost.
  - You are about to drop the column `criado_em` on the `Compartilhamento` table. All the data in the column will be lost.
  - You are about to drop the column `criado_em` on the `Curtida` table. All the data in the column will be lost.
  - You are about to drop the column `criado_em` on the `Postagem` table. All the data in the column will be lost.
  - You are about to drop the column `url_imagem` on the `Postagem` table. All the data in the column will be lost.
  - The primary key for the `PostagemSalva` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `criado_em` on the `PostagemSalva` table. All the data in the column will be lost.
  - You are about to drop the column `id_postagemsalva` on the `PostagemSalva` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_usuario,id_postagem]` on the table `Curtida` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario,id_postagem]` on the table `PostagemSalva` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tipo` to the `Postagem` table without a default value. This is not possible if the table is not empty.
  - The required column `id_postagem_salva` was added to the `PostagemSalva` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateEnum
CREATE TYPE "TipoPostagem" AS ENUM ('TEXTO', 'IMAGEM', 'VIDEO', 'AUDIO');

-- CreateEnum
CREATE TYPE "TipoNotificacao" AS ENUM ('CURTIDA', 'COMENTARIO', 'COMPARTILHAMENTO', 'SEGUIDOR', 'MENSAGEM', 'OUTRO');

-- CreateEnum
CREATE TYPE "StatusConexao" AS ENUM ('PENDENTE', 'ACEITA', 'RECUSADA', 'BLOQUEADA');

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_id_postagem_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Compartilhamento" DROP CONSTRAINT "Compartilhamento_id_postagem_fkey";

-- DropForeignKey
ALTER TABLE "Compartilhamento" DROP CONSTRAINT "Compartilhamento_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Curtida" DROP CONSTRAINT "Curtida_id_postagem_fkey";

-- DropForeignKey
ALTER TABLE "Curtida" DROP CONSTRAINT "Curtida_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Postagem" DROP CONSTRAINT "Postagem_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "PostagemSalva" DROP CONSTRAINT "PostagemSalva_id_postagem_fkey";

-- DropForeignKey
ALTER TABLE "PostagemSalva" DROP CONSTRAINT "PostagemSalva_id_usuario_fkey";

-- DropIndex
DROP INDEX "Usuario_id_usuario_key";

-- AlterTable
ALTER TABLE "Comentario" DROP COLUMN "criado_em",
ADD COLUMN     "data_comentario" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id_comentario_pai" TEXT;

-- AlterTable
ALTER TABLE "Compartilhamento" DROP COLUMN "criado_em",
ADD COLUMN     "data_compartilhamento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Curtida" DROP COLUMN "criado_em",
ADD COLUMN     "data_curtida" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Postagem" DROP COLUMN "criado_em",
DROP COLUMN "url_imagem",
ADD COLUMN     "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "midia" TEXT[],
ADD COLUMN     "tipo" "TipoPostagem" NOT NULL;

-- AlterTable
ALTER TABLE "PostagemSalva" DROP CONSTRAINT "PostagemSalva_pkey",
DROP COLUMN "criado_em",
DROP COLUMN "id_postagemsalva",
ADD COLUMN     "data_salvamento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id_postagem_salva" TEXT NOT NULL,
ADD CONSTRAINT "PostagemSalva_pkey" PRIMARY KEY ("id_postagem_salva");

-- CreateTable
CREATE TABLE "Notificacao" (
    "id_notificacao" TEXT NOT NULL,
    "id_usuario" TEXT NOT NULL,
    "tipo" "TipoNotificacao" NOT NULL,
    "mensagem" TEXT NOT NULL,
    "data_notificacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lido" BOOLEAN NOT NULL DEFAULT false,
    "referenciaId" TEXT,

    CONSTRAINT "Notificacao_pkey" PRIMARY KEY ("id_notificacao")
);

-- CreateTable
CREATE TABLE "Mensagem" (
    "id_mensagem" TEXT NOT NULL,
    "id_usuario_remetente" TEXT NOT NULL,
    "id_usuario_destinatario" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "data_mensagem" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lida" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("id_mensagem")
);

-- CreateTable
CREATE TABLE "Conexao" (
    "id_conexao" TEXT NOT NULL,
    "id_usuario_solicitante" TEXT NOT NULL,
    "id_usuario_solicitado" TEXT NOT NULL,
    "status" "StatusConexao" NOT NULL,
    "data_solicitacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Conexao_pkey" PRIMARY KEY ("id_conexao")
);

-- CreateIndex
CREATE INDEX "Notificacao_id_usuario_idx" ON "Notificacao"("id_usuario");

-- CreateIndex
CREATE INDEX "Mensagem_id_usuario_remetente_idx" ON "Mensagem"("id_usuario_remetente");

-- CreateIndex
CREATE INDEX "Mensagem_id_usuario_destinatario_idx" ON "Mensagem"("id_usuario_destinatario");

-- CreateIndex
CREATE INDEX "Conexao_id_usuario_solicitante_idx" ON "Conexao"("id_usuario_solicitante");

-- CreateIndex
CREATE INDEX "Conexao_id_usuario_solicitado_idx" ON "Conexao"("id_usuario_solicitado");

-- CreateIndex
CREATE UNIQUE INDEX "Conexao_id_usuario_solicitante_id_usuario_solicitado_key" ON "Conexao"("id_usuario_solicitante", "id_usuario_solicitado");

-- CreateIndex
CREATE INDEX "Comentario_id_postagem_idx" ON "Comentario"("id_postagem");

-- CreateIndex
CREATE INDEX "Compartilhamento_id_usuario_idx" ON "Compartilhamento"("id_usuario");

-- CreateIndex
CREATE INDEX "Compartilhamento_id_postagem_idx" ON "Compartilhamento"("id_postagem");

-- CreateIndex
CREATE INDEX "Curtida_id_postagem_idx" ON "Curtida"("id_postagem");

-- CreateIndex
CREATE UNIQUE INDEX "Curtida_id_usuario_id_postagem_key" ON "Curtida"("id_usuario", "id_postagem");

-- CreateIndex
CREATE INDEX "Postagem_id_usuario_idx" ON "Postagem"("id_usuario");

-- CreateIndex
CREATE INDEX "PostagemSalva_id_usuario_idx" ON "PostagemSalva"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "PostagemSalva_id_usuario_id_postagem_key" ON "PostagemSalva"("id_usuario", "id_postagem");

-- CreateIndex
CREATE INDEX "Usuario_nome_usuario_idx" ON "Usuario"("nome_usuario");

-- AddForeignKey
ALTER TABLE "Postagem" ADD CONSTRAINT "Postagem_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curtida" ADD CONSTRAINT "Curtida_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curtida" ADD CONSTRAINT "Curtida_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "Postagem"("id_postagem") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "Postagem"("id_postagem") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_id_comentario_pai_fkey" FOREIGN KEY ("id_comentario_pai") REFERENCES "Comentario"("id_comentario") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compartilhamento" ADD CONSTRAINT "Compartilhamento_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compartilhamento" ADD CONSTRAINT "Compartilhamento_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "Postagem"("id_postagem") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostagemSalva" ADD CONSTRAINT "PostagemSalva_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostagemSalva" ADD CONSTRAINT "PostagemSalva_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "Postagem"("id_postagem") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificacao" ADD CONSTRAINT "Notificacao_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_id_usuario_remetente_fkey" FOREIGN KEY ("id_usuario_remetente") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_id_usuario_destinatario_fkey" FOREIGN KEY ("id_usuario_destinatario") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conexao" ADD CONSTRAINT "Conexao_id_usuario_solicitante_fkey" FOREIGN KEY ("id_usuario_solicitante") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conexao" ADD CONSTRAINT "Conexao_id_usuario_solicitado_fkey" FOREIGN KEY ("id_usuario_solicitado") REFERENCES "Usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;
