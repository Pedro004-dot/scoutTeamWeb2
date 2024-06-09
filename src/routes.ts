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

const router = Router();

router.use('/auth', loginRouter);
router.use('/organizador', organizadorRouter); 
router.use('/atleta',atletaRouter)
router.use('/empresario', empresarioRouter); 
router.use('/treinador',treinadorRouter)
router.use('/time',timeRouter)
router.use('/competicao',competicaoRouter)
router.use('/estadio',estadioRouter)
router.use('/jogo',jogoRouter)
router.use('/partida',partidaRouter)
router.use('/arbitro',arbitroRouter)
router.use('/comissaoArbitragem',comissaoArbitragemRouter)
router.use('/evento', eventoRouter)

export default router;
