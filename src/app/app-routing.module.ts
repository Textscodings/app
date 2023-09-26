import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'q1', component: Q1Component},
  {path:'q2', component: Q2Component},
  {path:'q3', component:Q3Component},
  {path:'q4', component:Q4Component},
  {path:'result', component: ResultComponent},
  {path:'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
