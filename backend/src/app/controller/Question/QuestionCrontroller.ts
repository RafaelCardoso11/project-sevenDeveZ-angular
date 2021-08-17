import Question from './Question'
import { Request, Response } from 'express'

class QuestionController {
  public async FindAllz (req: Request, res: Response): Promise<Response> {
    const test = await Question.FindAll()
    if (test.error !== true) {
      return res.status(200).json(test)
    } else {
      return res.status(401).json(test)
    }
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const { title, body, tags } = req.body
    const _id = req.userId
    const teste = await Question.createQ(title, body, tags, _id)
    if (teste.error !== true) {
      return res.status(200).json(teste)
    } else {
      return res.status(400).json(teste)
    }
  }

  public async Edit (req: Request, res: Response): Promise<Response> {
    const { _id, title, body, tags, author, totalComments } = req.body
    const data = {
      title, body, tags, author, totalComments
    }
    const test = await Question.EditQ(_id, data)
    if (test.error !== true) {
      return res.status(200).json(test)
    } else {
      return res.status(401).json(test)
    }
  }

  public async DeleteQ (req: Request, res: Response): Promise<Response> {
    const { _id } = req.body
    const test = await Question.DeleteQ(_id)
    if (test.error !== true) {
      return res.status(200).json(test)
    } else {
      return res.status(401).json(test)
    }
  }

  public async FindOn (req: Request, res: Response): Promise<Response> {
    const { _id } = req.params
    console.log(_id)
    const test = await Question.FindOne(_id)
    if (test.error !== true) {
      return res.status(200).json(test)
    } else {
      return res.status(401).json(test)
    }
  }
}

export default new QuestionController()
