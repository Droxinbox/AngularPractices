import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponent } from '../Components/my-first/my-first.component';
import { Routes, RouterModule } from '@angular/router';
import { ActSixMyFirstModComponent } from '../Components/act-six-my-first-mod/act-six-my-first-mod.component';


const routes: Routes = [
  { path: 'MyFirstComponent', component: MyFirstComponent }
];

RouterModule.forChild(routes);

@NgModule({
  declarations: [
    MyFirstComponent,
    ActSixMyFirstModComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyFirstComponent,
    ActSixMyFirstModComponent
  ]
})

export class MyFirstModule {}