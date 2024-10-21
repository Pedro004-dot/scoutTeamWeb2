/*
  Warnings:

  - The `categoria` column on the `Empresario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `categorias` column on the `Time` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `categoria` column on the `Treinador` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Pessoa` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id_usuario]` on the table `Atleta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `Empresario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `Organizador` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `Time` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `Treinador` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_usuario]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome_time` to the `Time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade_endereco` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data_nascimento` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado_endereco` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nacionalidade` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone_contato` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `perfil` on the `Usuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TipoPerfil" AS ENUM ('ATLETA', 'TREINADOR', 'ORGANIZADOR', 'TIME', 'EMPRESARIO');

-- CreateEnum
CREATE TYPE "Categoria" AS ENUM ('PROFISSIONAL', 'AMADOR', 'JUVENIL', 'INFANTIL', 'SUB20', 'SUB17', 'SUB15', 'SUB13', 'FEMININO', 'MASCULINO');

-- DropForeignKey
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_id_usuario_fkey";

-- AlterTable
ALTER TABLE "Empresario" DROP COLUMN "categoria",
ADD COLUMN     "categoria" "Categoria"[];

-- AlterTable
ALTER TABLE "Time" ADD COLUMN     "nome_time" TEXT NOT NULL,
DROP COLUMN "categorias",
ADD COLUMN     "categorias" "Categoria"[];

-- AlterTable
ALTER TABLE "Treinador" ADD COLUMN     "historico_times" TEXT[],
DROP COLUMN "categoria",
ADD COLUMN     "categoria" "Categoria"[];

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "cidade_endereco" TEXT NOT NULL,
ADD COLUMN     "data_nascimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "estado_endereco" TEXT NOT NULL,
ADD COLUMN     "foto" TEXT,
ADD COLUMN     "nacionalidade" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "telefone_contato" TEXT NOT NULL,
DROP COLUMN "perfil",
ADD COLUMN     "perfil" "TipoPerfil" NOT NULL;

-- DropTable
DROP TABLE "Pessoa";

-- CreateIndex
CREATE UNIQUE INDEX "Atleta_id_usuario_key" ON "Atleta"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Empresario_id_usuario_key" ON "Empresario"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Organizador_id_usuario_key" ON "Organizador"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Time_id_usuario_key" ON "Time"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Treinador_id_usuario_key" ON "Treinador"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_id_usuario_key" ON "Usuario"("id_usuario");
