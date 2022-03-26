import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { DetalhesComponent } from './detalhes/detalhes.component';



@NgModule({
  declarations: [
    CursosComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
