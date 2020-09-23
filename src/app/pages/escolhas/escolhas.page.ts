import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolhas',
  templateUrl: './escolhas.page.html',
  styleUrls: ['./escolhas.page.scss'],
})
export class EscolhasPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  NavegarOrigemDestino(origem: any, destino: any){
    console.log('Estou navegando de => ',destino);
    this.Navegar(destino);
  }

  Navegar(destino: any){
    console.log('Estou navegando para => ',destino);
    this.router.navigate([destino]);
  }
}
