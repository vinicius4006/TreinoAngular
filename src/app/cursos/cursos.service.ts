import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //http

  constructor() { }

  getCursos(){
    return ["Angular", "React", "NodeJS", "MongoDB", "MySQL", "Flutter"];
  }



}
