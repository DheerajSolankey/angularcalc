import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  toshow='0'
  currvalue=''


  writetoinput(value:string)
  {   if(this.currvalue=='0'){
      this.currvalue=value
    }
    if(this.currvalue!='0')
    {this.currvalue=this.currvalue+value
    }
    this.toshow = this.currvalue
  }

equals(){
  this.toshow=eval(this.currvalue)
  this.currvalue=this.toshow
}

clear(){
  this.currvalue='';
  this.toshow='0'
}
back(){
  this.currvalue=this.currvalue.slice(0,-1)
  if(this.currvalue==''){this.currvalue='0'}
  this.toshow=this.currvalue
}




}
