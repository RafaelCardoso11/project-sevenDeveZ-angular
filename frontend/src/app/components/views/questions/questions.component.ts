import { Component, OnInit } from '@angular/core';
import { readQuestion } from 'src/app/interfaces/questionsActions';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  cards =[]
  constructor(
    private controllerQuestions: QuestionsService
  ) { }

  ngOnInit(): void {
    this.controllerQuestions.readQuestion().subscribe(readDate => {
      readDate['Question'].forEach(element => {
        this.cards.push({
          title: element.title,
          body: element.body,
          tags: element.tags,
          totalComments: element.totalComments,
          author: element.author
        })
     
      });

    })
  }

}
