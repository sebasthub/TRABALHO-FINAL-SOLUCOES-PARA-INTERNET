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
    public atualizarManutencao(manutencao: Manutencao,id: Number) {
        return new Promise((aceito, rejeitado) => {
            db.query(
                `UPDATE db.manutencao
                SET
                data = '${manutencao.data}',
                solicitante ='${manutencao.solicitante}',
                veiculo = '${manutencao.veiculo}',
                empresa_manutencao = '${manutencao.empresa_manutencao}',
                retorno = '${manutencao.retorno}',
                valor = ${manutencao.valor},
                problemas = '${manutencao.problemas}'
                WHERE idmanutencao = ${id};`, (error, results) => {
                if (error) { rejeitado(error); return; } 
                aceito(results);
            });
        });
    }
    public deletaManutencao(id: Number) {
        return new Promise((aceito, rejeitado) => {
            db.query(
            `DELETE FROM db.manutencao
            WHERE idmanutencao = ${id};`
            , (error, results) => {
                if (error) { rejeitado(error); return; } 
                aceito(results);
            });
        });
    }
}

export const manutencaoService = new ManutencaoService();