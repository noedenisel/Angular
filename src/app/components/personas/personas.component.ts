import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../Clase/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  displayedColumns: string[] = [ 'Nombre', 'Apellido', 'NumSocio',  'Dni', 'Telefono', 'Sexo', 'Acciones'];
  dataSource!:  MatTableDataSource<any>;
  listPersona: Persona[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static:true}) sort!:  MatSort;


  constructor(private _personaService: PersonaService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarPersonas();
  } 
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  cargarPersonas(){
    this.listPersona = this._personaService.getPersonas();
    this.dataSource = new MatTableDataSource(this.listPersona);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  eliminarPersona(index: number){
    console.log(index);
    this._personaService.eliminarPersona(index);
    this.cargarPersonas();
    this._snackBar.open('El registro fue eliminado con exito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
