import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { Component, OnInit } from '@angular/core';
import { newQuestion } from 'src/app/interfaces/questionsActions';

@Component({
  selector: 'app-new-questions',
  templateUrl: './new-questions.component.html',
  styleUrls: ['./new-questions.component.scss']
})
export class NewQuestionsComponent implements OnInit {

  constructor(private questionService: QuestionsService, private router: Router) { }

  ngOnInit(): void {
  }
  question =<newQuestion> {
    tags: '',
    title: '',
    body: '',
    author: localStorage.getItem('bearer token')
  }
  tags: ''
    title: ''
    body: ''
 
  addNewQuestion(){
    return this.questionService.newQuestion(this.question).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/']);
    })
  }
}
