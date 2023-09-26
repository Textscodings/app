import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component {

  constructor(private router:Router) {

  }

  OnClick() {
    this.router.navigate(['/q2']);
  }

}
