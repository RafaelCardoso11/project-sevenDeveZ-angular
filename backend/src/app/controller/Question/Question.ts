import { ReturnQuestion, EditInterfaceQuestion } from './InterfaceQuestion'
import { QuestionModel } from '../../models/QuestionSchema'
import { UserModel } from '../../models/UserSchema'

class Question {
  public async FindAll (): Promise<ReturnQuestion> {
    try {
      const QuestionM = await QuestionModel.find()
      return { error: false, massage: 'Sucessful', Question: QuestionM }
    } catch (error) {
      return { error: true, massage: error.menssage }
    }
  }

  public async createQ (body:string, title:string, tags:string, _id:string): Promise<ReturnQuestion> {
    try {
      const UserRt = await UserModel.findById(_id)
      const QuestionCreate = await QuestionModel.create({ body, title, tags, author: UserRt.name, totalComments: 0 })
      return { error: false, massage: 'Sucessful', Question: QuestionCreate }
    } catch (error) {
      return { error: true, massage: error.message }
    }
  }

  public async EditQ (_id:string, data:EditInterfaceQuestion): Promise<ReturnQuestion> {
    try {
      const QuestionM = await QuestionModel.findById(_id)
      QuestionM.body = data.body || QuestionM.body
      QuestionM.title = data.title || QuestionM.title
      QuestionM.tags = data.tags || QuestionM.tags
      QuestionM.totalComments = data.totalComments || QuestionM.totalComments
      QuestionM.author = data.author || QuestionM.author

      const ok = await QuestionM.save()
      return { error: false, massage: 'Sucessful', Question: ok }
    } catch (error) {
      return { error: true, massage: error.message }
    }
  }

  public async DeleteQ (_id: string): Promise<ReturnQuestion> {
    try {
      const QuestionM = await QuestionModel.findById(_id)

      await QuestionM.delete()

      return { error: false, massage: 'Sucessful Delete' }
    } catch (error) {
      return { error: true, massage: 'Questão Não encontrada' }
    }
  }

  public async FindOne (_id: string): Promise<ReturnQuestion> {
    try {
      const QuestionM = await QuestionModel.findById(_id)
      return { error: false, massage: 'Sucessful', Question: QuestionM }
    } catch (error) {
      return { error: true, massage: error.menssage }
    }
  }
}

export default new Question()
