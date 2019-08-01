import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category3',
  templateUrl: './category3.page.html',
  styleUrls: ['./category3.page.scss'],
})
export class Category3Page implements OnInit {

  cat3 : number = 0;
  
  onStart(){
    this.category3();
  }
  
  category3(){
      if(this.cat3 < 5)
      this.cat3++;
  }

//calculate and display final results

  //track user scoreCat3
  answersCat3 = ["D","A","A","B","C"] 
 totCat3:number = this.answersCat3.length;
 radios:any;
 getCheckedValueCat3( radioName ){
 this.radios = document.getElementsByName( radioName ); // Get radio group by-name
 for(let y=0; y<this.radios.length; y++)
    if(this.radios[y].checked) return this.radios[y].value; // return the checked value
 }
 scoreCat3 : number = 0;
 getScoreCat3(){
  this.category3();
 for (let i=0; i<this.totCat3; i++)
   if(this.getCheckedValueCat3("questionCat3"+i)===this.answersCat3[i]) this.scoreCat3 += 1; // increment only
 return this.scoreCat3;
 }

returnScoreCat3(){
 alert("Your score is "+ this.getScoreCat3() +"/"+ this.totCat3
 +"\n"
 +"\n"+"Correct answers: "+this.answersCat3
 );
 this.answersCat3;
 }
 
  ngOnInit() {
  }

}
