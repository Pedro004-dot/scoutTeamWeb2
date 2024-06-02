import express from 'express';
import { loginRouter } from './routes/LoginRoutes';
import { organizadorRouter } from './routes/OrganizadorRoutes';
import {atletaRouter} from './routes/AtletaRoutes'
import { Router } from "express";
import { empresarioRouter } from './routes/EmpresarioRoutes';
import { treinadorRouter } from './routes/TreinadorRoutes';
import { timeRouter } from './routes/TimeRoutes';
import { competicaoRouter } from './routes/CompeticaoRoutes';
import {estadioRouter} from './routes/EstadioRoutes'

const router = Router();

router.use('/auth', loginRouter);
router.use('/organizador', organizadorRouter); 
router.use('/atleta',atletaRouter)
router.use('/empresario', empresarioRouter); 
router.use('/treinador',treinadorRouter)
router.use('/time',timeRouter)
router.use('/competicao',competicaoRouter)
router.use('/estadio',estadioRouter)

export default router;
