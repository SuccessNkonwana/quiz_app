import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.page.html',
  styleUrls: ['./category1.page.scss'],
})
export class Category1Page implements OnInit {

  cat1 : number = 0;
  constructor(private route1: Router){

  }
  onStart(){
    this.category1();
  }
  //next question
  category1(){
    if(this.cat1 < 3)
       this.cat1++; 
      
  }
  
  //track user scoreCat1
  answersCat1 = ["A","C","B","A","A"] 
 totCat1:number = this.answersCat1.length;
 radios:any;
 getCheckedValueCat1( radioName ){
 this.radios = document.getElementsByName( radioName ); // Get radio group by-name
 for(let y=0; y<this.radios.length; y++)
    if(this.radios[y].checked) return this.radios[y].value; // return the checked value
 }
 scoreCat1 : number = 0;
 getScoreCat1(){
  this.category1();
 for (let i=0; i<this.totCat1; i++)
   if(this.getCheckedValueCat1("questionCat1"+i)===this.answersCat1[i]) this.scoreCat1 += 1; // increment only
 return this.scoreCat1;
 }
 disabled:boolean = false;

returnScoreCat1(){
  this.scoreCat1=this.getScoreCat1();
 alert("Your scoreCat1 is "+ this.scoreCat1 +"/"+ this.totCat1);
 this.answersCat1;
//  this.disabled=true;
//  this.route1.navigate(['/results'],{queryParams:{answersCat1:this.answersCat1,scoreCat1:this.scoreCat1}})
 }
 
 


  ngOnInit() {
  }

}
