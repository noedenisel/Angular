import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonasComponent } from './components/crear-personas/crear-personas.component';
import { PersonasComponent } from './components/personas/personas.component';

const routes: Routes = [
  
  { path: '', component: PersonasComponent },
  { path: 'add', component: CrearPersonasComponent },
  { path: 'edit/:id', component: CrearPersonasComponent },
  { path: '**', component: PersonasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
