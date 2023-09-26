import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component {

  
  constructor(private router:Router) {

  }

  OnClick() {
    this.router.navigate(['/q4']);
  }


}
