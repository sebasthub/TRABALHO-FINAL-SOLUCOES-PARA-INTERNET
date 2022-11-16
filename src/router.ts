import { Router } from "express";
import { firstController } from "./controllers/FirstController";
import { manutencaoController } from "./controllers/ManutancaoController"

const router: Router = Router();

//Routes
router.get("/", firstController.home);
router.get("/manutencoes", manutencaoController.list);

export { router };