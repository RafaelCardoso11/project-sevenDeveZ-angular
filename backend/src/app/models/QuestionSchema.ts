import { Schema, Model, model, Document } from 'mongoose'

export interface QuestionInterface extends Document{
    title: string;
    body: string;
    tags: string;
    author: string;
    totalComments: number;
  }
export type IQuestion = QuestionInterface;
export type IQuestionModel = Model<IQuestion>;

export const QuestionSchema: Schema<IQuestion> = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter a Title'],
    minlength: [10, 'Minimum Title length is 10 characters']
  },
  body: {
    type: String,
    required: [true, 'Please enter a Body'],
    minlength: [20, 'Minimum body length is 20 characters']
  },
  tags: {
    type: String,
    required: [true, 'Please enter a Tags'],
    minlength: [3, 'Minimum body tags is 3, characters']
  },
  totalComments: {
    type: Number,
    required: [true, 'Please enter a totalComments']
  },
  author: {
    type: String,
    required: [true, 'Please enter a Author'],
    minlength: [4, 'Minimum body author is 4 characters']
  }
}, {
  timestamps: true
})

export const QuestionModel: IQuestionModel = model<IQuestion, IQuestionModel>('Question', QuestionSchema)
