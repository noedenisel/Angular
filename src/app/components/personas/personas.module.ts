import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CrearPersonasComponent } from '../crear-personas/crear-personas.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'crear-personas', component: CrearPersonasComponent},
      
    
    ])
  ]
})
export class PersonasModule { }
