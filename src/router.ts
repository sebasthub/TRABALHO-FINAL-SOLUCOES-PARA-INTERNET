import { Router } from "express";
import { firstController } from "./controllers/FirstController";
import { manutencaoController } from "./controllers/ManutancaoController"

const router: Router = Router();

//Routes
router.get("/", firstController.home);
router.get("/manutencoes", manutencaoController.list);
router.post("/manutencoes", manutencaoController.post);
router.put("/manutencoes/:id", manutencaoController.put)

export { router };