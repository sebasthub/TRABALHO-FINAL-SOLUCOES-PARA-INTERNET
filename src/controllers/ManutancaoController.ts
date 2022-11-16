import { Request, Response } from "express";
import { Manutencao } from "../model/Manutencao";
import { manutencaoService } from "../services/ManutencaoService";

class ManutencaoController {
    
  public async list(req: Request, res: Response) {
    const lista = await manutencaoService.buscarTodos();
    return res.json({
      response: lista,
    });
  }
  public async post(req: Request, res: Response) {
    const manutencao: Manutencao = req.body;
    const resp = await manutencaoService.postarManutencao(manutencao);
    return res.json({
        response: resp,
      });
  }
  public async put(req: Request, res: Response){
    const manutencao: Manutencao = req.body;
    const resp = await manutencaoService.atualizarManutencao(manutencao, Number(req.params.id));
    return res.json({
        response: resp,
      });
  }
  public async delete(req: Request, res: Response){
    const resp = await manutencaoService.deletaManutencao(Number(req.params.id));
    return res.json({
        response: resp,
      });
  }
}

export const manutencaoController = new ManutencaoController();
