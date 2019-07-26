import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   disabled1:boolean = false;
   disabled2:boolean = false;
   disabled3:boolean = false;

   disable1()
{
this.disabled1 = true;
}

disable2()
{
this.disabled2 = true;
}
disable3()
{
this.disabled3 = true;
}
}
