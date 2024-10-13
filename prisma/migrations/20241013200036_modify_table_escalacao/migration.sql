-- DropForeignKey
ALTER TABLE "EscalacaoTime" DROP CONSTRAINT "EscalacaoTime_id_atleta_fkey";

-- DropForeignKey
ALTER TABLE "EscalacaoTime" DROP CONSTRAINT "EscalacaoTime_id_time_fkey";

-- AddForeignKey
ALTER TABLE "EscalacaoTime" ADD CONSTRAINT "EscalacaoTime_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EscalacaoTime" ADD CONSTRAINT "EscalacaoTime_id_atleta_fkey" FOREIGN KEY ("id_atleta") REFERENCES "Atleta"("id_atleta") ON DELETE RESTRICT ON UPDATE CASCADE;
