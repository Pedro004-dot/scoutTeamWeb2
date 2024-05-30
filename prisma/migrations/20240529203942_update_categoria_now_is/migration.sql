/*
  Warnings:

  - The `categoria` column on the `Empresario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `categorias` column on the `Time` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `categoria` column on the `Treinador` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Empresario" DROP COLUMN "categoria",
ADD COLUMN     "categoria" TEXT[];

-- AlterTable
ALTER TABLE "Time" DROP COLUMN "categorias",
ADD COLUMN     "categorias" TEXT[];

-- AlterTable
ALTER TABLE "Treinador" DROP COLUMN "categoria",
ADD COLUMN     "categoria" TEXT[];
