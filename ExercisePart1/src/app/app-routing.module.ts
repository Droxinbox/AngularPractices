import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyFirstComponent } from '../app/Components/my-first/my-first.component';

const routes: Routes = [
  { path: 'Home', component: AppComponent },
  { path: 'MyFirstComponent', component: MyFirstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
