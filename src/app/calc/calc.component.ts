import { Component } from '@angular/core';

@Component({
  selector:   'g-calc',
  templateUrl:'../calc/calc.component.html',
  styleUrls:['../calc/calc.component.css'] 
})

export class CalcComponent{
  calcName = 'CalCalc';

  isEnabled = true;

  /*constructor(){
    this.isEnabled = true;
  }*/

  addition(event){
    this.isEnabled = false;
  }

}