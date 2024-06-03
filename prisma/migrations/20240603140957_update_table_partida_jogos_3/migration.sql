-- Adicionando a coluna id_partida como opcional inicialmente
ALTER TABLE "public"."Jogo" ADD COLUMN "id_partida" TEXT;

-- Atualize os valores de id_partida com um valor válido de uma entrada existente na tabela Partida
-- Supondo que você tem pelo menos uma entrada na tabela Partida
UPDATE "public"."Jogo" SET "id_partida" = (SELECT "id_partida" FROM "public"."Partida" LIMIT 1);

-- Agora torne a coluna obrigatória
ALTER TABLE "public"."Jogo" ALTER COLUMN "id_partida" SET NOT NULL;

-- Adicione a chave estrangeira
ALTER TABLE "public"."Jogo" ADD CONSTRAINT "Jogo_id_partida_fkey" FOREIGN KEY ("id_partida") REFERENCES "public"."Partida"("id_partida") ON DELETE CASCADE;
