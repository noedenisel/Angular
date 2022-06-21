import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router'
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../Clase/persona';


@Component({
  selector: 'app-crear-personas',
  templateUrl: './crear-personas.component.html',
  styleUrls: ['./crear-personas.component.css']
})
export class CrearPersonasComponent implements OnInit {

  sexo: any[] = ['Hombre', 'Mujer'];
  idPersona: any;
  accion= 'Crear'

  myForm: FormGroup
  constructor(private fb: FormBuilder, 
    private _personaService: PersonaService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private _snackBar: MatSnackBar) {
    this.myForm = this.fb.group({
      Nombre: ['', Validators.minLength(3)],
      Apellido: ['', Validators.minLength(3)],
      NumSocio: ['', Validators.required],
      Dni: ['', Validators.length==9],
      Telefono: ['', Validators.required],
      Sexo: ['', Validators.required],
    });
  
    const idParam= 'id';
    this.idPersona = this.aRoute.snapshot.params[idParam]
   }

  ngOnInit(): void {
    if (this.idPersona !== undefined) {
      this.accion = 'Editar';
      this.esEditar();
    }
  }

    guardarPersona() {

     const persona: Persona = {
        Nombre: this.myForm.value.Nombre,
        Apellido: this.myForm.value.Apellido,
        NumSocio: this.myForm.value.NumSocio,
        Dni: this.myForm.value.Dni,
        Telefono: this.myForm.value.Telefono,
        Sexo: this.myForm.value.Sexo,
  };
  if (this.idPersona !== undefined) {
    this.editarPersona(persona);
  } else {
    this.agregarPersona(persona);
  };
      
};


agregarPersona(persona: Persona) {
  this._personaService.agregarPersona(persona);
  this._snackBar.open('El registro fue creado con exito!', '', {
    duration: 1500
  });
  this.router.navigate(['/']);
}
  


editarPersona(persona: Persona) {
  this._personaService.editPersona(persona, this.idPersona);
  this._snackBar.open('El registro fue actualizado con exito!', '', {
    duration: 3000
  });
  this.router.navigate(['/']);
}

esEditar() {
  const persona: Persona = this._personaService.getPersona(this.idPersona);
  console.log(persona);
  this.myForm.patchValue({
    Nombre: persona.Nombre,
    Apellido: persona.Apellido,
    Dni: persona.Dni,
    Telefono: persona.Telefono,
    Sexo: persona.Sexo,
  });
}

}




