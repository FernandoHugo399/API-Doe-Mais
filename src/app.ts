import { db } from './database/index'
import express from 'express'
import dotenv from 'dotenv'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
      this.database()
    }

    private middlewares (): void {
      dotenv.config()
      this.express.use(express.json())
    }

    private routes (): void {
      this.express.use('/', (req, res) => {
        res.send('Hello World!')
      })
    }

    private database (): void {
      db.connect()
        .then(() => console.log('Conectado ao postgres'))
        .catch(err => console.log(err))
    }
}

export default new App().express
