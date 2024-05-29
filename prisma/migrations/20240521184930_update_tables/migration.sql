/*
  Warnings:

  - Changed the type of `typeProfile` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "dateBirthOrFundantion" DROP NOT NULL,
DROP COLUMN "typeProfile",
ADD COLUMN     "typeProfile" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Profile";
