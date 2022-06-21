import { Injectable } from '@angular/core';
import { Persona } from '../components/Clase/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  listPersona: Persona[] = [
    {Nombre: 'Noelia', Apellido: 'Lombrdo',NumSocio: '001',  Dni: '33082433N', Telefono: '1133931511', Sexo: 'mujer'}

  ];

  constructor() { }

  getPersonas() {
    return this.listPersona.slice();
  }

  

  eliminarPersona(index:number){
    this.listPersona.splice(index, 1); 
    
    
  }

  agregarPersona(persona: Persona){
    this.listPersona.unshift(persona);
  }

  
  getPersona(index: number){
    return this.listPersona[index];
  }


  editPersona(persona: Persona, idPersona: number){
        this.listPersona[idPersona].Nombre= persona.Nombre;
        this.listPersona[idPersona].Apellido = persona.Apellido;
        this.listPersona[idPersona].Dni = persona.Dni;
        this.listPersona[idPersona].Telefono = persona.Telefono;
        this.listPersona[idPersona].Sexo = persona.Sexo;
  }



}

