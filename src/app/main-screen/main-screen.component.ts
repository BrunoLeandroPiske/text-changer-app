import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  text1: string = '';
  text2: string = '';
  type_convertion: string = '0';

  constructor() { }

  ngOnInit(): void {
  }

  changeText1() {
    this.text2 = this.get_type_and_convert();
  }

  get_type_and_convert() {
    switch (this.type_convertion) {
      case '0': {
        return this.text1.split("").reverse().join("");;
        break;
      }
      case '1': {
        return this.text1.toUpperCase();
        break;
      }
      case '2': {
        return this.text1.toLowerCase();
        break;
      }
      default: {
        return this.text1;
      }
    }
      
  }

}