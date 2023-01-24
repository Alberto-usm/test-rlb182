import { Router } from "express";
import { getCargos, getCargo, createCargo,updateCargo,deleteCargo } from "../controllers/cargo.controller.js";

const router = Router();

router.get('/cargo', getCargos);
router.get('/cargo/:id', getCargo);

router.post('/cargo', createCargo);
router.put('/cargo', updateCargo);
router.delete('/cargo', deleteCargo);

export default router