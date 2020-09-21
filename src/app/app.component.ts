import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text-changer-app';
  accordion_expanded = true;

  convert_text() {
    console.log('convert_text');
  }

  convert_number() {
    console.log('convert_number');
  }

  convert_units() {
    console.log('convert_units');
  }

  convert_money() {
    console.log('convert_money');
  }

}
