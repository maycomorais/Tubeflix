import express from "express";
import { getIndex } from '../controler/Controler.js';

export const routers = express.Router();

routers.get('/', getIndex);


