import { Schema, Model, model, Document } from 'mongoose'

export interface QuestionInterface {
    title: string;
    body: string;
    tags: string;
    author: string;
  }

export interface Question extends QuestionInterface, Document {

  }

const QuestionSchema = new Schema({
  title: {
    type: String
  },
  body: String,
  name: String,
  tags: Number,
  author: String
}, {
  timestamps: true
})

export const User: Model<Question> = model<Question>('Question', QuestionSchema)
