import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'https://digimon-api.herokuapp.com';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  botaoClicado(){
    console.log("WORKS");
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }


  onKeyUp(event: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>event.target).value;

  }



  constructor() { }

  ngOnInit(): void {
  }

}
