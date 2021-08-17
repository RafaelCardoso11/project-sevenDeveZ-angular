import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newQuestion, readQuestion } from '../interfaces/questionsActions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  readQuestions = <readQuestion>{
    title: '',
    body: '',
    tags: '',
    totalComments: 0,
    author: ''
  }
  addQuestion =<newQuestion> {
    tags: '',
    title: '',
    body: '',
    author: localStorage.getItem('bearer token')
  }
  urlBase = 'https://apisevendevz.herokuapp.com/questions'
  urlBase2 = 'https://apisevendevz.herokuapp.com/question'
  constructor(private http: HttpClient) { }

  addNewQuestion() {

  }
  readQuestion<readQuestions>(): Observable<readQuestions> {
    return this.http.get<readQuestions>(this.urlBase);
  }
  newQuestion<addQuestion>(question): Observable<addQuestion> {
    console.log(this.addQuestion)
    return this.http.post<addQuestion>(this.urlBase2,  {
      Headers:{
        'Authorization': 'BearerToken' + ' ' + question.author,
      },
      question
    });
  }
}
