import express from "express";
import { 
    getIndex, 
    getDetalhes,
    getDeletar,
    getCriar,
    postCriar,
    getEditar,
    postEditar } from '../controler/Controler.js';

export const routers = express.Router();

routers.get('/', getIndex);
routers.get('/detalhes/:id', getDetalhes)
routers.get('/deletar/:id', getDeletar)

routers.get('/criar', getCriar)
routers.post('/criar', postCriar)

routers.get('/editar/:id', getEditar)
routers.post('/editar/:id', postEditar)


