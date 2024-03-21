import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponentComponent } from '../my-first-component/my-first-component.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'MyFirstComponent', component: MyFirstComponentComponent }
];

RouterModule.forChild(routes);

@NgModule({
  declarations: [
    MyFirstComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyFirstComponentComponent
  ]
})

export class MyFirstModuleModule { 
}
