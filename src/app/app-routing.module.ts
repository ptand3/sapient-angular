import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import  {CounterComponent} from "./counter/components/counter/counter.component";
import { StudentScoreComponent } from "./components/student-score/student-score.component";

const routes: Routes = [ //Define the configuration of routes
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "counter",
    component: CounterComponent, 
  },
  {
    path: "score",
    component: StudentScoreComponent
  },
  {
    path: "product", //what module should be loaded when on specific route
    loadChildren: ()=> import('./product/product.module').then(module =>module.ProductModule)  // The loadChildren property is used to specify the module that needs to be lazy-loaded when it is first navigated to.
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
