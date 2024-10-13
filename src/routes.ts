import { loginRouter } from './routes/LoginRoutes';
import { organizadorRouter } from './routes/OrganizadorRoutes';
import {atletaRouter} from './routes/AtletaRoutes'
import { Router } from "express";
import { empresarioRouter } from './routes/EmpresarioRoutes';
import { treinadorRouter } from './routes/TreinadorRoutes';
import { timeRouter } from './routes/TimeRoutes';
import { competicaoRouter } from './routes/CompeticaoRoutes';
import {estadioRouter} from './routes/EstadioRoutes'
import {jogoRouter} from "./routes/JogoRoutes"
import { partidaRouter } from './routes/PartidaRoutes';
import { arbitroRouter } from './routes/ArbitroRoutes';
import { comissaoArbitragemRouter } from './routes/ComissaoArbitragemRoutes';
import { eventoRouter } from './routes/EventoRoutes';
import { escalacaoRouter } from './routes/EscalacaoRoutes';

const router = Router();

router.use('/arbitro', arbitroRouter);
router.use('/atleta', atletaRouter);
router.use('/auth', loginRouter);
router.use('/comissaoArbitragem', comissaoArbitragemRouter);
router.use('/competicao', competicaoRouter);
router.use('/empresario', empresarioRouter);
router.use('/escalacao', escalacaoRouter);
router.use('/estadio', estadioRouter);
router.use('/evento', eventoRouter);
router.use('/jogo', jogoRouter);
router.use('/organizador', organizadorRouter);
router.use('/partida', partidaRouter);
router.use('/time', timeRouter);
router.use('/treinador', treinadorRouter);


export default router;
