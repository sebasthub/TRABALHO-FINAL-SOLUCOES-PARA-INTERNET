import supertest from "supertest";
import { App } from "../app";
const db = require('../db');


describe("manutenção programada", () => {
    let id = {};
    afterAll(() => {
        db.end();
    })

    it(`deveria criar uma manutenção programada`, async () => {
        const response = await supertest(new App().server).post('/manutencoes').send({
            data: "2002-01-10",
            solicitante: "sebas",
            veiculo: "gol rebaixado",
            empresa_manutencao: "tite",
            retorno: "2002-01-11",
            valor: 34,
            problemas: "vamos venser"
        })

        id = response.body.response[0]['LAST_INSERT_ID()'];
        console.log(id);

        expect(response.status).toBe(201);
    })
    it(`deveria alterar informações da manutenção programada`,async () => {
        const response = await supertest(new App().server).put(`/manutencoes/${id}`).send({
            data: "2002-01-10",
            solicitante: "neymar",
            veiculo: "gol rebaixado",
            empresa_manutencao: "tite",
            retorno: "2002-01-11",
            valor: 34,
            problemas: "vamos venser"
        })


        expect(response.status).toBe(200);
    })
    it(`deveria listar as manutenções programadas`,async ()=> {
        const response = await supertest(new App().server).get('/manutencoes');
        
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('response')
    })
    it(`deveria excluir um item`, async () => {
        const response = await supertest(new App().server).delete(`/manutencoes/${id}`);

        expect(response.status).toBe(200);
    })
})