import express from 'express';
import { loginRouter } from './routes/LoginRoutes';
import { organizadorRouter } from './routes/OrganizadorRoutes';
import {atletaRouter} from './routes/AtletaRoutes'
import { Router } from "express";
//import organizerRoutes from './routes/organizerRoutes'; // Importe as rotas de organizador

const router = Router();

router.use('/auth', loginRouter);
router.use('/organizador', organizadorRouter); 
router.use('/atleta',atletaRouter)

export default router;
