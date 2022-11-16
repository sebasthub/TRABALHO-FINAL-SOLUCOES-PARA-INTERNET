import { Request, Response } from "express";
import { manutencaoService } from "../services/ManutencaoService";

class ManutencaoController {
    
  public async list(req: Request, res: Response) {
    const lista = await manutencaoService.buscarTodos()
    return res.json({
      response: lista,
    });
  }
}

export const manutencaoController = new ManutencaoController();
