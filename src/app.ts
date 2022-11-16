import express from "express";
import { router } from "./router";
const cors = require('cors');
export class App{
  public server: express.Application = express();

  

  constructor(){
    this.server;
    this.middleware();
    this.router();
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

}