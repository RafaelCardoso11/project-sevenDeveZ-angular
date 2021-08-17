import { QuestionInterface } from '../../models/QuestionSchema'
export interface ReturnQuestion {
    error:boolean
    massage:string
    // eslint-disable-next-line @typescript-eslint/ban-types
    Question?:QuestionInterface | QuestionInterface[]

}

export interface EditInterfaceQuestion {
    body:string
    title:string
    tags:string
    totalComments:number
    author:string

}
