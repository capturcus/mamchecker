import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private textareaString: string = "";

  private badWords: Array<string> = [];

  private wordsDict = {};
  private fs;

  private ready: boolean;

  private error: string = "";

  constructor() {
    this.fs = require('fs');
  }

  loadWords() {
    console.log("preparing words");
    let that = this;
    this.ready = false;
    this.wordsDict = {};
    this.fs.readFile('words.txt', 'utf8', function (err, data) {
      if (err){
        console.log("errored ", err);
        that.error = String(err);
        return console.log(err);
      }
      console.log("loading words")
      for (var word of data.split("\n")) {
        that.wordsDict[word] = true;
      }
      that.fs.readFile('mojeslowa.txt', 'utf8', function (err, data) {
        if (err){
          console.log("errored ", err);
          that.error = String(err);
          return console.log(err);
        }
        console.log("loading mojeslowa")
        for (var word of data.split("\n")) {
          that.wordsDict[word] = true;
        }
        delete that.wordsDict[""];
        console.log(Object.keys(that.wordsDict).length);
        that.ready = true;
      });
    });
  }

  ngOnInit() {
    this.loadWords();
  }

  checkText() {
    this.badWords = [];
    let words = this.textareaString.split(/\s+/);
    for (let word of words) {
      let cleanWord = word.toLowerCase().replace(/[^a-zA-Zżółćęąźńś]/gi, '');
      if (this.wordsDict[cleanWord] === undefined && cleanWord !== "") {
        this.badWords.push(cleanWord);
      }
    }
    this.textareaString = "";
  }
}
