-- CreateEnum
CREATE TYPE "Profile" AS ENUM ('Athlete', 'Coach', 'Team', 'FootbaallAgent', 'ChampionshipOrganizer');

-- CreateTable
CREATE TABLE "users" (
    "userID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dateBirthOrFundantion" TIMESTAMP(3) NOT NULL,
    "addressCity" TEXT NOT NULL,
    "addressState" TEXT NOT NULL,
    "genre" TEXT,
    "contactsPhone" TEXT,
    "photo" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "typeProfile" "Profile" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "athletes" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userID" TEXT NOT NULL,

    CONSTRAINT "athletes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "positions" (
    "id" TEXT NOT NULL,
    "athleteID" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characteristic" (
    "id" TEXT NOT NULL,
    "athleteID" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "characteristic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coachs" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userID" TEXT NOT NULL,

    CONSTRAINT "coachs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agents" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userID" TEXT NOT NULL,

    CONSTRAINT "agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "footbaallAgents" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userID" TEXT NOT NULL,

    CONSTRAINT "footbaallAgents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "championshipOrganizers" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userID" TEXT NOT NULL,

    CONSTRAINT "championshipOrganizers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "athletes_userID_key" ON "athletes"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "coachs_userID_key" ON "coachs"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "agents_userID_key" ON "agents"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "footbaallAgents_userID_key" ON "footbaallAgents"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "championshipOrganizers_userID_key" ON "championshipOrganizers"("userID");

-- AddForeignKey
ALTER TABLE "athletes" ADD CONSTRAINT "athletes_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_athleteID_fkey" FOREIGN KEY ("athleteID") REFERENCES "athletes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characteristic" ADD CONSTRAINT "characteristic_athleteID_fkey" FOREIGN KEY ("athleteID") REFERENCES "athletes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coachs" ADD CONSTRAINT "coachs_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agents" ADD CONSTRAINT "agents_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "footbaallAgents" ADD CONSTRAINT "footbaallAgents_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "championshipOrganizers" ADD CONSTRAINT "championshipOrganizers_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
