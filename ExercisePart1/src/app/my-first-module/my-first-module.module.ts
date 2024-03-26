import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponent } from '../Components/my-first/my-first.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'MyFirstComponent', component: MyFirstComponent }
];

RouterModule.forChild(routes);

@NgModule({
  declarations: [
    MyFirstComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyFirstComponent
  ]
})

export class MyFirstModuleModule { 
}
