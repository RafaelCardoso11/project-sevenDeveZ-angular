
import express from 'express'
import cors from 'cors'
import routes from './routers/routes'
import mongoose from 'mongoose'

import * as dotenv from 'dotenv'

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
      this.database()
    }

    private middlewares ():void {
      this.express.use(express.json())
      this.express.use(express.urlencoded({ extended: true }))
      this.express.use(cors())
    }

    private routes ():void {
      this.express.use(routes)
    }

    private database (): void {
      mongoose.connect(`mongodb+srv://${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => { console.log('ok') })
    }
}

export default new App().express
