import { Router } from "express";

import * as ApiController from '../controllers/apicontroller';

const router = Router();

router.get('/listaTarefa', ApiController.getListaT)
router.post('/listaTarefa', ApiController.postListaT)
router.put('/listaTarefa/:id', ApiController.putListaT)
router.delete('/listaTarefa/:id', ApiController.removeListaT)


export default router;