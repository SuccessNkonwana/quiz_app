import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.page.html',
  styleUrls: ['./category2.page.scss'],
})
export class Category2Page implements OnInit {

  cat2 : number = 0;
  constructor(private route: Router){

  }
  onStart(){
    this.category2();
  }
  
  category2(){
      if(this.cat2 < 5)
      this.cat2++;
  }

//calculate and display final results

  //track user scoreCat2
  answersCat2 = ["B","C","B","A","A"] 
 totCat2:number = this.answersCat2.length;
 radios:any;
 getCheckedValueCat2( radioName ){
 this.radios = document.getElementsByName( radioName ); // Get radio group by-name
 for(let y=0; y<this.radios.length; y++)
    if(this.radios[y].checked) return this.radios[y].value; // return the checked value
 }
 scoreCat2 : number = 0;
 getScoreCat2(){
  this.category2();
 for (let i=0; i<this.totCat2; i++)
   if(this.getCheckedValueCat2("questionCat2"+i)===this.answersCat2[i]) this.scoreCat2 += 1; // increment only
 return this.scoreCat2;
 }

returnScoreCat2(){
  document.getElementById('alert')
 alert(
      
      "Your score is "+ this.getScoreCat2() +"/"+ this.totCat2
      +"\n"
      +"\n"+"Correct answers: "+this.answersCat2
 );
 this.answersCat2;
 }

 
  ngOnInit() {
  }

}
