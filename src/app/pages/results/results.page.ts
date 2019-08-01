import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
@Input() answersCat1: number;
@Input() scoreCat1:number;
  constructor(private route: ActivatedRoute) { }
  default(){
    this.answersCat1=0;
    this.scoreCat1=0;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(data=>{console.log(data);
      this.answersCat1=data.answersCat1;
      this.scoreCat1=data.scoreCat1;
      console.log(this.answersCat1);
    });
  }

}
