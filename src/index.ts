import { App } from "./app"
require('dotenv').config({ path: 'variaveis.env' });

new App().server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
});