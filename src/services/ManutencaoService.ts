import db from "../db"
import { Manutencao } from "../model/Manutencao";

class ManutencaoService {
    public buscarTodos(){
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM manutencao', (error, results) => {
                if (error) { rejeitado(error); return; } 
                aceito(results);
            });
        });
    }
    public postarManutencao(manutencao: Manutencao){
        return new Promise((aceito, rejeitado) => {
            db.query(`INSERT INTO db.manutencao
            (
            data,
            solicitante,
            veiculo,
            empresa_manutencao,
            retorno,
            valor,
            problemas)
            VALUES
            (
                '${manutencao.data}',
                '${manutencao.solicitante}',
                '${manutencao.veiculo}',
                '${manutencao.empresa_manutencao}',
                '${manutencao.retorno}',
                '${manutencao.valor}',
                '${manutencao.problemas}');`, (error, results) => {
                if (error) { rejeitado(error); return; } 
                aceito(results);
            });
        });
    }
}

export const manutencaoService = new ManutencaoService();