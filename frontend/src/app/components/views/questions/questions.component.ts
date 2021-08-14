import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  cards = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit ut............'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit ut............'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
