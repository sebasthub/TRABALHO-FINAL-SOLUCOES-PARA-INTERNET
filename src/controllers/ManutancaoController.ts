import { Request, Response } from "express";
import { Manutencao } from "../model/Manutencao";
import { manutencaoService } from "../services/ManutencaoService";

class ManutencaoController {
    
  public async list(req: Request, res: Response) {
    /* #swagger.tags = ['Manutenção programada']
           #swagger.description = 'Endpoint para buscar todas as Manutenções programadas.' */
    const lista = await manutencaoService.buscarTodos();
    return res.json({
      response: lista,
    });
  }
  public async post(req: Request, res: Response) {
    /* #swagger.tags = ['Manutenção programada']
           #swagger.description = 'Endpoint para adicionar uma Manutenção programada.' */

        /*	#swagger.parameters['newManutencao'] = {
            in: 'body',
            description: 'adicionar a manutenção programada',
            required: true,
            schema: { $ref: "#/definitions/AddManutencao" }
    } */
    const manutencao: Manutencao = req.body;
    const resp = await manutencaoService.postarManutencao(manutencao);
    return res.json({
        response: resp,
      });
  }
  public async put(req: Request, res: Response){
    /* #swagger.tags = ['Manutenção programada']
           #swagger.description = 'Endpoint para modificar uma Manutenção programada.' */

        /*	#swagger.parameters['altManutencao'] = {
            in: 'body',
            description: 'alterar a manutenção programada',
            required: true,
            schema: { $ref: "#/definitions/AddManutencao" }
    } */
    const manutencao: Manutencao = req.body;
    const resp = await manutencaoService.atualizarManutencao(manutencao, Number(req.params.id));
    return res.json({
        response: resp,
      });
  }
  public async delete(req: Request, res: Response){
    /* #swagger.tags = ['Manutenção programada']
           #swagger.description = 'Endpoint para deletar uma Manutenção programada.' */
    const resp = await manutencaoService.deletaManutencao(Number(req.params.id));
    return res.json({
        response: resp,
      });
  }
}

export const manutencaoController = new ManutencaoController();
