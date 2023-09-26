import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component {

  
  constructor(private router:Router) {

  }

  OnClick() {
    this.router.navigate(['/result']);
  }


}
