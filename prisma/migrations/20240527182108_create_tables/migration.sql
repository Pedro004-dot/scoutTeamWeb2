/*
  Warnings:

  - You are about to drop the `agents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `athletes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `championshipOrganizers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `characteristic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `coachs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `footbaallAgents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `positions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "agents" DROP CONSTRAINT "agents_userID_fkey";

-- DropForeignKey
ALTER TABLE "athletes" DROP CONSTRAINT "athletes_userID_fkey";

-- DropForeignKey
ALTER TABLE "championshipOrganizers" DROP CONSTRAINT "championshipOrganizers_userID_fkey";

-- DropForeignKey
ALTER TABLE "characteristic" DROP CONSTRAINT "characteristic_athleteID_fkey";

-- DropForeignKey
ALTER TABLE "coachs" DROP CONSTRAINT "coachs_userID_fkey";

-- DropForeignKey
ALTER TABLE "footbaallAgents" DROP CONSTRAINT "footbaallAgents_userID_fkey";

-- DropForeignKey
ALTER TABLE "positions" DROP CONSTRAINT "positions_athleteID_fkey";

-- DropTable
DROP TABLE "agents";

-- DropTable
DROP TABLE "athletes";

-- DropTable
DROP TABLE "championshipOrganizers";

-- DropTable
DROP TABLE "characteristic";

-- DropTable
DROP TABLE "coachs";

-- DropTable
DROP TABLE "footbaallAgents";

-- DropTable
DROP TABLE "positions";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "perfil" TEXT NOT NULL,
    "nome_usuario" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "id_pessoa" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "cidade_endereco" TEXT NOT NULL,
    "estado_endereco" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "nacionalidade" TEXT NOT NULL,
    "telefone_contato" TEXT NOT NULL,
    "foto" TEXT,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id_pessoa")
);

-- CreateTable
CREATE TABLE "Postagem" (
    "id_postagem" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "url_imagem" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Postagem_pkey" PRIMARY KEY ("id_postagem")
);

-- CreateTable
CREATE TABLE "Curtida" (
    "id_curtida" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_postagem" INTEGER NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Curtida_pkey" PRIMARY KEY ("id_curtida")
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id_comentario" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_postagem" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id_comentario")
);

-- CreateTable
CREATE TABLE "Compartilhamento" (
    "id_compartilhamento" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_postagem" INTEGER NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Compartilhamento_pkey" PRIMARY KEY ("id_compartilhamento")
);

-- CreateTable
CREATE TABLE "PostagemSalva" (
    "id_postagemsalva" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_postagem" INTEGER NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostagemSalva_pkey" PRIMARY KEY ("id_postagemsalva")
);

-- CreateTable
CREATE TABLE "Organizador" (
    "id_organizador" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Organizador_pkey" PRIMARY KEY ("id_organizador")
);

-- CreateTable
CREATE TABLE "Time" (
    "id_time" SERIAL NOT NULL,
    "categorias" TEXT NOT NULL,
    "modelo_uniforme" TEXT,
    "escudo" TEXT,
    "id_usuario" INTEGER NOT NULL,
    "id_competicao" INTEGER NOT NULL,

    CONSTRAINT "Time_pkey" PRIMARY KEY ("id_time")
);

-- CreateTable
CREATE TABLE "Treinador" (
    "id_treinador" SERIAL NOT NULL,
    "id_time" INTEGER NOT NULL,
    "cref" TEXT,
    "categoria" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Treinador_pkey" PRIMARY KEY ("id_treinador")
);

-- CreateTable
CREATE TABLE "Atleta" (
    "id_atleta" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_time" INTEGER NOT NULL,
    "altura" DOUBLE PRECISION,
    "peso" DOUBLE PRECISION,
    "pontuacao" INTEGER,
    "id_empresario" INTEGER NOT NULL,
    "caracteristicasJogo" TEXT[],
    "posicoes" TEXT[],

    CONSTRAINT "Atleta_pkey" PRIMARY KEY ("id_atleta")
);

-- CreateTable
CREATE TABLE "Empresario" (
    "id_empresario" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Empresario_pkey" PRIMARY KEY ("id_empresario")
);

-- CreateTable
CREATE TABLE "Competicao" (
    "id_competicao" SERIAL NOT NULL,
    "id_organizador" INTEGER NOT NULL,
    "orgao_publico" BOOLEAN NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,
    "regulamento" TEXT NOT NULL,

    CONSTRAINT "Competicao_pkey" PRIMARY KEY ("id_competicao")
);

-- CreateTable
CREATE TABLE "Jogo" (
    "id_jogo" SERIAL NOT NULL,
    "id_time" INTEGER NOT NULL,
    "id_competicao" INTEGER NOT NULL,
    "gols_time" INTEGER NOT NULL,
    "formacao_time" TEXT NOT NULL,

    CONSTRAINT "Jogo_pkey" PRIMARY KEY ("id_jogo")
);

-- CreateTable
CREATE TABLE "Partida" (
    "id_partida" SERIAL NOT NULL,
    "dia_jogo" TIMESTAMP(3) NOT NULL,
    "id_estadio" INTEGER NOT NULL,
    "id_jogo" INTEGER NOT NULL,
    "sumula" TEXT NOT NULL,

    CONSTRAINT "Partida_pkey" PRIMARY KEY ("id_partida")
);

-- CreateTable
CREATE TABLE "Arbitro" (
    "id_arbitro" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo_arbitragem" TEXT NOT NULL,
    "id_partida" INTEGER NOT NULL,

    CONSTRAINT "Arbitro_pkey" PRIMARY KEY ("id_arbitro")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id_evento" SERIAL NOT NULL,
    "tipo_evento" TEXT NOT NULL,
    "minuto_jogo" INTEGER NOT NULL,
    "id_atleta" INTEGER NOT NULL,
    "id_jogo" INTEGER NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id_evento")
);

-- CreateTable
CREATE TABLE "EscalacaoTime" (
    "id_EscalacaoTime" SERIAL NOT NULL,
    "posicao" TEXT NOT NULL,
    "id_atleta" INTEGER NOT NULL,
    "id_jogo" INTEGER NOT NULL,
    "id_time" INTEGER NOT NULL,

    CONSTRAINT "EscalacaoTime_pkey" PRIMARY KEY ("id_EscalacaoTime")
);

-- CreateTable
CREATE TABLE "Estadio" (
    "id_estadio" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cidade_endereco" TEXT NOT NULL,
    "estado_endereco" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "tipo_gramado" TEXT NOT NULL,
    "id_time" INTEGER NOT NULL,

    CONSTRAINT "Estadio_pkey" PRIMARY KEY ("id_estadio")
);

-- CreateTable
CREATE TABLE "DiretoriaTime" (
    "id_diretoriaTime" SERIAL NOT NULL,
    "cargo" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_final" TIMESTAMP(3) NOT NULL,
    "id_time" INTEGER NOT NULL,

    CONSTRAINT "DiretoriaTime_pkey" PRIMARY KEY ("id_diretoriaTime")
);

-- CreateTable
CREATE TABLE "AtletaJogo" (
    "id_AtletaJogos" SERIAL NOT NULL,
    "score" DOUBLE PRECISION,
    "id_treinador" INTEGER NOT NULL,
    "id_jogo" INTEGER NOT NULL,
    "id_atleta" INTEGER NOT NULL,

    CONSTRAINT "AtletaJogo_pkey" PRIMARY KEY ("id_AtletaJogos")
);

-- CreateTable
CREATE TABLE "HistoricoClubeAtleta" (
    "id_historicoClube" SERIAL NOT NULL,
    "score" DOUBLE PRECISION,
    "id_atleta" INTEGER NOT NULL,
    "id_time" INTEGER NOT NULL,
    "numeroCamisa" INTEGER[],
    "posicoesJogados" TEXT[],
    "premiosIndividuais" JSONB,
    "titulos" JSONB,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_final" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HistoricoClubeAtleta_pkey" PRIMARY KEY ("id_historicoClube")
);

-- CreateTable
CREATE TABLE "Lesoes" (
    "id_lesoes" SERIAL NOT NULL,
    "id_atleta" INTEGER NOT NULL,
    "tipoLesao" INTEGER NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_final" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lesoes_pkey" PRIMARY KEY ("id_lesoes")
);

-- CreateTable
CREATE TABLE "Educacao" (
    "educacao_id" SERIAL NOT NULL,
    "atleta_id" INTEGER NOT NULL,
    "ensino_medio" TEXT NOT NULL,
    "data_inicio_ensino_medio" TIMESTAMP(3),
    "data_final_ensino_medio" TIMESTAMP(3),
    "faculdade" TEXT NOT NULL,
    "data_inicio_faculdade" TIMESTAMP(3),
    "data_final_faculdade" TIMESTAMP(3),
    "curso" TEXT,

    CONSTRAINT "Educacao_pkey" PRIMARY KEY ("educacao_id")
);

-- CreateTable
CREATE TABLE "ExameMedico" (
    "exame_id" SERIAL NOT NULL,
    "atleta_id" INTEGER NOT NULL,
    "tipo_exame" TEXT NOT NULL,

    CONSTRAINT "ExameMedico_pkey" PRIMARY KEY ("exame_id")
);

-- CreateTable
CREATE TABLE "Teste" (
    "teste_id" SERIAL NOT NULL,
    "time_id" INTEGER NOT NULL,
    "atleta_id" INTEGER NOT NULL,
    "resultado" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_final" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teste_pkey" PRIMARY KEY ("teste_id")
);

-- CreateTable
CREATE TABLE "HistoricoClubeTreinador" (
    "id_historicoClube" SERIAL NOT NULL,
    "score" DOUBLE PRECISION,
    "id_treinador" INTEGER NOT NULL,
    "id_time" INTEGER NOT NULL,
    "premiosIndividuais" JSONB,
    "titulos" JSONB,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_final" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HistoricoClubeTreinador_pkey" PRIMARY KEY ("id_historicoClube")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nome_usuario_key" ON "Usuario"("nome_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_id_usuario_key" ON "Pessoa"("id_usuario");

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
