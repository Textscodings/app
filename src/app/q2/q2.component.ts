import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component {

  constructor(private router:Router) {

  }

  OnClick() {
    this.router.navigate(['/q3']);
  }


}
