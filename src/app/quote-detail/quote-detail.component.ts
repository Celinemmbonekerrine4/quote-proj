import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote :Quote;

  @Output()isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upvote=0;
  downvote=0;

  voteDown(){
    this.downvote=this.downvote+1
  };
  voteUp(){
    this.upvote=this.upvote+1
  };
  
  constructor() { }

  ngOnInit() {
  }

}
