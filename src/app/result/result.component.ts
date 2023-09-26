import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  
  constructor(private router:Router) {

  }
  OnSubmit() {
    this.router.navigate(['/home']);
  }
  
}
