/*
  Warnings:

  - The primary key for the `Arbitro` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Atleta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `AtletaJogo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Comentario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Compartilhamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Competicao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Curtida` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DiretoriaTime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Educacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Empresario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `EscalacaoTime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Estadio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Evento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ExameMedico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `HistoricoClubeAtleta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `HistoricoClubeTreinador` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Jogo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Lesoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Organizador` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Partida` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pessoa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Postagem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PostagemSalva` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Teste` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Time` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Treinador` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Arbitro" DROP CONSTRAINT "Arbitro_id_partida_fkey";

-- DropForeignKey
ALTER TABLE "Atleta" DROP CONSTRAINT "Atleta_id_empresario_fkey";

-- DropForeignKey
ALTER TABLE "Atleta" DROP CONSTRAINT "Atleta_id_time_fkey";

-- DropForeignKey
ALTER TABLE "Atleta" DROP CONSTRAINT "Atleta_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "AtletaJogo" DROP CONSTRAINT "AtletaJogo_id_atleta_fkey";

-- DropForeignKey
ALTER TABLE "AtletaJogo" DROP CONSTRAINT "AtletaJogo_id_jogo_fkey";

-- DropForeignKey
ALTER TABLE "AtletaJogo" DROP CONSTRAINT "AtletaJogo_id_treinador_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_id_postagem_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Compartilhamento" DROP CONSTRAINT "Compartilhamento_id_postagem_fkey";

-- DropForeignKey
ALTER TABLE "Compartilhamento" DROP CONSTRAINT "Compartilhamento_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Competicao" DROP CONSTRAINT "Competicao_id_organizador_fkey";

-- DropForeignKey
ALTER TABLE "Curtida" DROP CONSTRAINT "Curtida_id_postagem_fkey";

-- DropForeignKey
ALTER TABLE "Curtida" DROP CONSTRAINT "Curtida_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "DiretoriaTime" DROP CONSTRAINT "DiretoriaTime_id_time_fkey";

-- DropForeignKey
ALTER TABLE "Educacao" DROP CONSTRAINT "Educacao_atleta_id_fkey";

-- DropForeignKey
ALTER TABLE "Empresario" DROP CONSTRAINT "Empresario_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "EscalacaoTime" DROP CONSTRAINT "EscalacaoTime_id_atleta_fkey";

-- DropForeignKey
ALTER TABLE "EscalacaoTime" DROP CONSTRAINT "EscalacaoTime_id_jogo_fkey";

-- DropForeignKey
ALTER TABLE "EscalacaoTime" DROP CONSTRAINT "EscalacaoTime_id_time_fkey";

-- DropForeignKey
ALTER TABLE "Estadio" DROP CONSTRAINT "Estadio_id_time_fkey";

-- DropForeignKey
ALTER TABLE "Evento" DROP CONSTRAINT "Evento_id_atleta_fkey";

-- DropForeignKey
ALTER TABLE "Evento" DROP CONSTRAINT "Evento_id_jogo_fkey";

-- DropForeignKey
ALTER TABLE "ExameMedico" DROP CONSTRAINT "ExameMedico_atleta_id_fkey";

-- DropForeignKey
ALTER TABLE "HistoricoClubeAtleta" DROP CONSTRAINT "HistoricoClubeAtleta_id_atleta_fkey";

-- DropForeignKey
ALTER TABLE "HistoricoClubeAtleta" DROP CONSTRAINT "HistoricoClubeAtleta_id_time_fkey";

-- DropForeignKey
ALTER TABLE "HistoricoClubeTreinador" DROP CONSTRAINT "HistoricoClubeTreinador_id_time_fkey";

-- DropForeignKey
ALTER TABLE "HistoricoClubeTreinador" DROP CONSTRAINT "HistoricoClubeTreinador_id_treinador_fkey";

-- DropForeignKey
ALTER TABLE "Jogo" DROP CONSTRAINT "Jogo_id_competicao_fkey";

-- DropForeignKey
ALTER TABLE "Jogo" DROP CONSTRAINT "Jogo_id_time_fkey";

-- DropForeignKey
ALTER TABLE "Lesoes" DROP CONSTRAINT "Lesoes_id_atleta_fkey";

-- DropForeignKey
ALTER TABLE "Organizador" DROP CONSTRAINT "Organizador_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_id_estadio_fkey";

-- DropForeignKey
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_id_jogo_fkey";

-- DropForeignKey
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Postagem" DROP CONSTRAINT "Postagem_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "PostagemSalva" DROP CONSTRAINT "PostagemSalva_id_postagem_fkey";

-- DropForeignKey
ALTER TABLE "PostagemSalva" DROP CONSTRAINT "PostagemSalva_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Teste" DROP CONSTRAINT "Teste_atleta_id_fkey";

-- DropForeignKey
ALTER TABLE "Teste" DROP CONSTRAINT "Teste_time_id_fkey";

-- DropForeignKey
ALTER TABLE "Time" DROP CONSTRAINT "Time_id_competicao_fkey";

-- DropForeignKey
ALTER TABLE "Time" DROP CONSTRAINT "Time_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Treinador" DROP CONSTRAINT "Treinador_id_time_fkey";

-- DropForeignKey
ALTER TABLE "Treinador" DROP CONSTRAINT "Treinador_id_usuario_fkey";

-- AlterTable
ALTER TABLE "Arbitro" DROP CONSTRAINT "Arbitro_pkey",
ALTER COLUMN "id_arbitro" DROP DEFAULT,
ALTER COLUMN "id_arbitro" SET DATA TYPE TEXT,
ALTER COLUMN "id_partida" SET DATA TYPE TEXT,
ADD CONSTRAINT "Arbitro_pkey" PRIMARY KEY ("id_arbitro");
DROP SEQUENCE "Arbitro_id_arbitro_seq";

-- AlterTable
ALTER TABLE "Atleta" DROP CONSTRAINT "Atleta_pkey",
ALTER COLUMN "id_atleta" DROP DEFAULT,
ALTER COLUMN "id_atleta" SET DATA TYPE TEXT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ALTER COLUMN "id_time" SET DATA TYPE TEXT,
ALTER COLUMN "id_empresario" SET DATA TYPE TEXT,
ADD CONSTRAINT "Atleta_pkey" PRIMARY KEY ("id_atleta");
DROP SEQUENCE "Atleta_id_atleta_seq";

-- AlterTable
ALTER TABLE "AtletaJogo" DROP CONSTRAINT "AtletaJogo_pkey",
ALTER COLUMN "id_AtletaJogos" DROP DEFAULT,
ALTER COLUMN "id_AtletaJogos" SET DATA TYPE TEXT,
ALTER COLUMN "id_treinador" SET DATA TYPE TEXT,
ALTER COLUMN "id_jogo" SET DATA TYPE TEXT,
ALTER COLUMN "id_atleta" SET DATA TYPE TEXT,
ADD CONSTRAINT "AtletaJogo_pkey" PRIMARY KEY ("id_AtletaJogos");
DROP SEQUENCE "AtletaJogo_id_AtletaJogos_seq";

-- AlterTable
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_pkey",
ALTER COLUMN "id_comentario" DROP DEFAULT,
ALTER COLUMN "id_comentario" SET DATA TYPE TEXT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ALTER COLUMN "id_postagem" SET DATA TYPE TEXT,
ADD CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id_comentario");
DROP SEQUENCE "Comentario_id_comentario_seq";

-- AlterTable
ALTER TABLE "Compartilhamento" DROP CONSTRAINT "Compartilhamento_pkey",
ALTER COLUMN "id_compartilhamento" DROP DEFAULT,
ALTER COLUMN "id_compartilhamento" SET DATA TYPE TEXT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ALTER COLUMN "id_postagem" SET DATA TYPE TEXT,
ADD CONSTRAINT "Compartilhamento_pkey" PRIMARY KEY ("id_compartilhamento");
DROP SEQUENCE "Compartilhamento_id_compartilhamento_seq";

-- AlterTable
ALTER TABLE "Competicao" DROP CONSTRAINT "Competicao_pkey",
ALTER COLUMN "id_competicao" DROP DEFAULT,
ALTER COLUMN "id_competicao" SET DATA TYPE TEXT,
ALTER COLUMN "id_organizador" SET DATA TYPE TEXT,
ADD CONSTRAINT "Competicao_pkey" PRIMARY KEY ("id_competicao");
DROP SEQUENCE "Competicao_id_competicao_seq";

-- AlterTable
ALTER TABLE "Curtida" DROP CONSTRAINT "Curtida_pkey",
ALTER COLUMN "id_curtida" DROP DEFAULT,
ALTER COLUMN "id_curtida" SET DATA TYPE TEXT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ALTER COLUMN "id_postagem" SET DATA TYPE TEXT,
ADD CONSTRAINT "Curtida_pkey" PRIMARY KEY ("id_curtida");
DROP SEQUENCE "Curtida_id_curtida_seq";

-- AlterTable
ALTER TABLE "DiretoriaTime" DROP CONSTRAINT "DiretoriaTime_pkey",
ALTER COLUMN "id_diretoriaTime" DROP DEFAULT,
ALTER COLUMN "id_diretoriaTime" SET DATA TYPE TEXT,
ALTER COLUMN "id_time" SET DATA TYPE TEXT,
ADD CONSTRAINT "DiretoriaTime_pkey" PRIMARY KEY ("id_diretoriaTime");
DROP SEQUENCE "DiretoriaTime_id_diretoriaTime_seq";

-- AlterTable
ALTER TABLE "Educacao" DROP CONSTRAINT "Educacao_pkey",
ALTER COLUMN "educacao_id" DROP DEFAULT,
ALTER COLUMN "educacao_id" SET DATA TYPE TEXT,
ALTER COLUMN "atleta_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Educacao_pkey" PRIMARY KEY ("educacao_id");
DROP SEQUENCE "Educacao_educacao_id_seq";

-- AlterTable
ALTER TABLE "Empresario" DROP CONSTRAINT "Empresario_pkey",
ALTER COLUMN "id_empresario" DROP DEFAULT,
ALTER COLUMN "id_empresario" SET DATA TYPE TEXT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "Empresario_pkey" PRIMARY KEY ("id_empresario");
DROP SEQUENCE "Empresario_id_empresario_seq";

-- AlterTable
ALTER TABLE "EscalacaoTime" DROP CONSTRAINT "EscalacaoTime_pkey",
ALTER COLUMN "id_EscalacaoTime" DROP DEFAULT,
ALTER COLUMN "id_EscalacaoTime" SET DATA TYPE TEXT,
ALTER COLUMN "id_atleta" SET DATA TYPE TEXT,
ALTER COLUMN "id_jogo" SET DATA TYPE TEXT,
ALTER COLUMN "id_time" SET DATA TYPE TEXT,
ADD CONSTRAINT "EscalacaoTime_pkey" PRIMARY KEY ("id_EscalacaoTime");
DROP SEQUENCE "EscalacaoTime_id_EscalacaoTime_seq";

-- AlterTable
ALTER TABLE "Estadio" DROP CONSTRAINT "Estadio_pkey",
ALTER COLUMN "id_estadio" DROP DEFAULT,
ALTER COLUMN "id_estadio" SET DATA TYPE TEXT,
ALTER COLUMN "id_time" SET DATA TYPE TEXT,
ADD CONSTRAINT "Estadio_pkey" PRIMARY KEY ("id_estadio");
DROP SEQUENCE "Estadio_id_estadio_seq";

-- AlterTable
ALTER TABLE "Evento" DROP CONSTRAINT "Evento_pkey",
ALTER COLUMN "id_evento" DROP DEFAULT,
ALTER COLUMN "id_evento" SET DATA TYPE TEXT,
ALTER COLUMN "id_atleta" SET DATA TYPE TEXT,
ALTER COLUMN "id_jogo" SET DATA TYPE TEXT,
ADD CONSTRAINT "Evento_pkey" PRIMARY KEY ("id_evento");
DROP SEQUENCE "Evento_id_evento_seq";

-- AlterTable
ALTER TABLE "ExameMedico" DROP CONSTRAINT "ExameMedico_pkey",
ALTER COLUMN "exame_id" DROP DEFAULT,
ALTER COLUMN "exame_id" SET DATA TYPE TEXT,
ALTER COLUMN "atleta_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ExameMedico_pkey" PRIMARY KEY ("exame_id");
DROP SEQUENCE "ExameMedico_exame_id_seq";

-- AlterTable
ALTER TABLE "HistoricoClubeAtleta" DROP CONSTRAINT "HistoricoClubeAtleta_pkey",
ALTER COLUMN "id_historicoClube" DROP DEFAULT,
ALTER COLUMN "id_historicoClube" SET DATA TYPE TEXT,
ALTER COLUMN "id_atleta" SET DATA TYPE TEXT,
ALTER COLUMN "id_time" SET DATA TYPE TEXT,
ADD CONSTRAINT "HistoricoClubeAtleta_pkey" PRIMARY KEY ("id_historicoClube");
DROP SEQUENCE "HistoricoClubeAtleta_id_historicoClube_seq";

-- AlterTable
ALTER TABLE "HistoricoClubeTreinador" DROP CONSTRAINT "HistoricoClubeTreinador_pkey",
ALTER COLUMN "id_historicoClube" DROP DEFAULT,
ALTER COLUMN "id_historicoClube" SET DATA TYPE TEXT,
ALTER COLUMN "id_treinador" SET DATA TYPE TEXT,
ALTER COLUMN "id_time" SET DATA TYPE TEXT,
ADD CONSTRAINT "HistoricoClubeTreinador_pkey" PRIMARY KEY ("id_historicoClube");
DROP SEQUENCE "HistoricoClubeTreinador_id_historicoClube_seq";

-- AlterTable
ALTER TABLE "Jogo" DROP CONSTRAINT "Jogo_pkey",
ALTER COLUMN "id_jogo" DROP DEFAULT,
ALTER COLUMN "id_jogo" SET DATA TYPE TEXT,
ALTER COLUMN "id_time" SET DATA TYPE TEXT,
ALTER COLUMN "id_competicao" SET DATA TYPE TEXT,
ADD CONSTRAINT "Jogo_pkey" PRIMARY KEY ("id_jogo");
DROP SEQUENCE "Jogo_id_jogo_seq";

-- AlterTable
ALTER TABLE "Lesoes" DROP CONSTRAINT "Lesoes_pkey",
ALTER COLUMN "id_lesoes" DROP DEFAULT,
ALTER COLUMN "id_lesoes" SET DATA TYPE TEXT,
ALTER COLUMN "id_atleta" SET DATA TYPE TEXT,
ADD CONSTRAINT "Lesoes_pkey" PRIMARY KEY ("id_lesoes");
DROP SEQUENCE "Lesoes_id_lesoes_seq";

-- AlterTable
ALTER TABLE "Organizador" DROP CONSTRAINT "Organizador_pkey",
ALTER COLUMN "id_organizador" DROP DEFAULT,
ALTER COLUMN "id_organizador" SET DATA TYPE TEXT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "Organizador_pkey" PRIMARY KEY ("id_organizador");
DROP SEQUENCE "Organizador_id_organizador_seq";

-- AlterTable
ALTER TABLE "Partida" DROP CONSTRAINT "Partida_pkey",
ALTER COLUMN "id_partida" DROP DEFAULT,
ALTER COLUMN "id_partida" SET DATA TYPE TEXT,
ALTER COLUMN "id_estadio" SET DATA TYPE TEXT,
ALTER COLUMN "id_jogo" SET DATA TYPE TEXT,
ADD CONSTRAINT "Partida_pkey" PRIMARY KEY ("id_partida");
DROP SEQUENCE "Partida_id_partida_seq";

-- AlterTable
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_pkey",
ALTER COLUMN "id_pessoa" DROP DEFAULT,
ALTER COLUMN "id_pessoa" SET DATA TYPE TEXT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id_pessoa");
DROP SEQUENCE "Pessoa_id_pessoa_seq";

-- AlterTable
ALTER TABLE "Postagem" DROP CONSTRAINT "Postagem_pkey",
ALTER COLUMN "id_postagem" DROP DEFAULT,
ALTER COLUMN "id_postagem" SET DATA TYPE TEXT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "Postagem_pkey" PRIMARY KEY ("id_postagem");
DROP SEQUENCE "Postagem_id_postagem_seq";

-- AlterTable
ALTER TABLE "PostagemSalva" DROP CONSTRAINT "PostagemSalva_pkey",
ALTER COLUMN "id_postagemsalva" DROP DEFAULT,
ALTER COLUMN "id_postagemsalva" SET DATA TYPE TEXT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ALTER COLUMN "id_postagem" SET DATA TYPE TEXT,
ADD CONSTRAINT "PostagemSalva_pkey" PRIMARY KEY ("id_postagemsalva");
DROP SEQUENCE "PostagemSalva_id_postagemsalva_seq";

-- AlterTable
ALTER TABLE "Teste" DROP CONSTRAINT "Teste_pkey",
ALTER COLUMN "teste_id" DROP DEFAULT,
ALTER COLUMN "teste_id" SET DATA TYPE TEXT,
ALTER COLUMN "time_id" SET DATA TYPE TEXT,
ALTER COLUMN "atleta_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Teste_pkey" PRIMARY KEY ("teste_id");
DROP SEQUENCE "Teste_teste_id_seq";

-- AlterTable
ALTER TABLE "Time" DROP CONSTRAINT "Time_pkey",
ALTER COLUMN "id_time" DROP DEFAULT,
ALTER COLUMN "id_time" SET DATA TYPE TEXT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ALTER COLUMN "id_competicao" SET DATA TYPE TEXT,
ADD CONSTRAINT "Time_pkey" PRIMARY KEY ("id_time");
DROP SEQUENCE "Time_id_time_seq";

-- AlterTable
ALTER TABLE "Treinador" DROP CONSTRAINT "Treinador_pkey",
ALTER COLUMN "id_treinador" DROP DEFAULT,
ALTER COLUMN "id_treinador" SET DATA TYPE TEXT,
ALTER COLUMN "id_time" SET DATA TYPE TEXT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "Treinador_pkey" PRIMARY KEY ("id_treinador");
DROP SEQUENCE "Treinador_id_treinador_seq";

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
ALTER COLUMN "id_usuario" DROP DEFAULT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario");
DROP SEQUENCE "Usuario_id_usuario_seq";

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Postagem" ADD CONSTRAINT "Postagem_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curtida" ADD CONSTRAINT "Curtida_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curtida" ADD CONSTRAINT "Curtida_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "Postagem"("id_postagem") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "Postagem"("id_postagem") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compartilhamento" ADD CONSTRAINT "Compartilhamento_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compartilhamento" ADD CONSTRAINT "Compartilhamento_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "Postagem"("id_postagem") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostagemSalva" ADD CONSTRAINT "PostagemSalva_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostagemSalva" ADD CONSTRAINT "PostagemSalva_id_postagem_fkey" FOREIGN KEY ("id_postagem") REFERENCES "Postagem"("id_postagem") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organizador" ADD CONSTRAINT "Organizador_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Time" ADD CONSTRAINT "Time_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Time" ADD CONSTRAINT "Time_id_competicao_fkey" FOREIGN KEY ("id_competicao") REFERENCES "Competicao"("id_competicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treinador" ADD CONSTRAINT "Treinador_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Treinador" ADD CONSTRAINT "Treinador_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atleta" ADD CONSTRAINT "Atleta_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atleta" ADD CONSTRAINT "Atleta_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atleta" ADD CONSTRAINT "Atleta_id_empresario_fkey" FOREIGN KEY ("id_empresario") REFERENCES "Empresario"("id_empresario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Empresario" ADD CONSTRAINT "Empresario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competicao" ADD CONSTRAINT "Competicao_id_organizador_fkey" FOREIGN KEY ("id_organizador") REFERENCES "Organizador"("id_organizador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jogo" ADD CONSTRAINT "Jogo_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jogo" ADD CONSTRAINT "Jogo_id_competicao_fkey" FOREIGN KEY ("id_competicao") REFERENCES "Competicao"("id_competicao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_id_jogo_fkey" FOREIGN KEY ("id_jogo") REFERENCES "Jogo"("id_jogo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_id_estadio_fkey" FOREIGN KEY ("id_estadio") REFERENCES "Estadio"("id_estadio") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arbitro" ADD CONSTRAINT "Arbitro_id_partida_fkey" FOREIGN KEY ("id_partida") REFERENCES "Partida"("id_partida") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_id_atleta_fkey" FOREIGN KEY ("id_atleta") REFERENCES "Atleta"("id_atleta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_id_jogo_fkey" FOREIGN KEY ("id_jogo") REFERENCES "Jogo"("id_jogo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EscalacaoTime" ADD CONSTRAINT "EscalacaoTime_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EscalacaoTime" ADD CONSTRAINT "EscalacaoTime_id_atleta_fkey" FOREIGN KEY ("id_atleta") REFERENCES "Atleta"("id_atleta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EscalacaoTime" ADD CONSTRAINT "EscalacaoTime_id_jogo_fkey" FOREIGN KEY ("id_jogo") REFERENCES "Jogo"("id_jogo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estadio" ADD CONSTRAINT "Estadio_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiretoriaTime" ADD CONSTRAINT "DiretoriaTime_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtletaJogo" ADD CONSTRAINT "AtletaJogo_id_jogo_fkey" FOREIGN KEY ("id_jogo") REFERENCES "Jogo"("id_jogo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtletaJogo" ADD CONSTRAINT "AtletaJogo_id_atleta_fkey" FOREIGN KEY ("id_atleta") REFERENCES "Atleta"("id_atleta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtletaJogo" ADD CONSTRAINT "AtletaJogo_id_treinador_fkey" FOREIGN KEY ("id_treinador") REFERENCES "Treinador"("id_treinador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoClubeAtleta" ADD CONSTRAINT "HistoricoClubeAtleta_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoClubeAtleta" ADD CONSTRAINT "HistoricoClubeAtleta_id_atleta_fkey" FOREIGN KEY ("id_atleta") REFERENCES "Atleta"("id_atleta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesoes" ADD CONSTRAINT "Lesoes_id_atleta_fkey" FOREIGN KEY ("id_atleta") REFERENCES "Atleta"("id_atleta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Educacao" ADD CONSTRAINT "Educacao_atleta_id_fkey" FOREIGN KEY ("atleta_id") REFERENCES "Atleta"("id_atleta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExameMedico" ADD CONSTRAINT "ExameMedico_atleta_id_fkey" FOREIGN KEY ("atleta_id") REFERENCES "Atleta"("id_atleta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teste" ADD CONSTRAINT "Teste_atleta_id_fkey" FOREIGN KEY ("atleta_id") REFERENCES "Atleta"("id_atleta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teste" ADD CONSTRAINT "Teste_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "Time"("id_time") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoClubeTreinador" ADD CONSTRAINT "HistoricoClubeTreinador_id_time_fkey" FOREIGN KEY ("id_time") REFERENCES "Time"("id_time") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricoClubeTreinador" ADD CONSTRAINT "HistoricoClubeTreinador_id_treinador_fkey" FOREIGN KEY ("id_treinador") REFERENCES "Treinador"("id_treinador") ON DELETE RESTRICT ON UPDATE CASCADE;
