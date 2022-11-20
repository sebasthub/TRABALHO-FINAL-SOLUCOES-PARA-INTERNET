import express from "express";
import { router } from "./router";
const db = require('./db');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const cors = require('cors');

const app = express();
app.use(express.json);
app.use(router);
app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

export class App{
  public server: express.Application = express();

  

  constructor(){
    this.server;
    this.middleware();
    this.router();
    this.usecors();
    this.swagerui();
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }

  private usecors(){
    this.server.use(cors())
  }

  private swagerui(){
    this.server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  }

}