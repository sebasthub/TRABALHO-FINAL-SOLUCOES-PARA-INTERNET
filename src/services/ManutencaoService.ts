import db from "../db"

class ManutencaoService {
    public buscarTodos(){
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM manutencao', (error, results) => {
                if (error) { rejeitado(error); return; } 
                aceito(results);
            });
        });
    }
}

export const manutencaoService = new ManutencaoService();