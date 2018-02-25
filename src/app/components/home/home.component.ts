import { Component, OnInit } from '@angular/core';

import { Words } from './src/words';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private textareaString: string;

  constructor() { }

  ngOnInit() {
  }

  checkText() {
    console.log(this.textareaString);
  }
}
