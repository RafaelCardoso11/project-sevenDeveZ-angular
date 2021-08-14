import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  cards = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit ut............',
      totalComments: 10,
      author: 'Pedro',
      tag: 'React Js'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit ut............',
      totalComments: 10,
      author: 'Pedro',
      tag: 'Angular 11'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit ut............',
      totalComments: 10,
      author: 'Pedro',
      tag: 'PHP'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit ut............',
      totalComments: 10,
      author: 'Pedro',
      tag: 'Vue Js'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit ut............',
      totalComments: 10,
      author: 'Pedro',
      tag: 'ReactNative Js'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
