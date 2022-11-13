import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
@Component({
  selector: 'efv-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  
   
    
   
    pelicula : Pelicula ={
      id : 1,
      nombre : 'rambo',
      genero : 'romance',
      director : 'andres'
      }
  constructor() { }

  ngOnInit(): void {
  }

}
