import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'https://digimon-api.herokuapp.com';

  getValor(){
    return 1;
  }
  cursoAngular: boolean = true;

  getCursoLike(){
    return true;
  }

  urlImage = 'http://lorempixel.com.br/300/200/?1';

  constructor() { }

  ngOnInit(): void {
  }

}
