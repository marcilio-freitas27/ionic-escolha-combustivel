import { Component } from '@angular/core';
import { IonInput, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  resultado: any;
  color: any;
  tema: any;
  checked: boolean;
  constructor() {
    this.checked = false;
  }

  ngOnInit(){
    this.resultado = "Álcool ou Gasolina?";
    this.color = "dark";
    this.tema = "dark";
  }

  calcularQualUsar(alcool: IonInput, gasolina: IonInput) {
   let calculo: any;
   if(alcool.value != null && gasolina.value != null){
    calculo = +alcool.value / +gasolina.value;
    if(calculo <= 0.7 ){
      this.resultado = 'Abastecer com Álcool'
      this.color = "primary"
    }else {
      this.resultado = 'Abastecer com Gasolina';
      this.color = "warning"
    }
   }
  }

  mudarTema(){
    this.checked ? this.tema = "dark" : this.tema = "light";
    this.checked = !this.checked;
  }

  limparEntradas(alcool: IonInput, gasolina: IonInput){
   if(alcool.value != null && gasolina.value != null){
    alcool.value = '';
    gasolina.value = '';
    this.resultado = "Álcool ou Gasolina?";
    this.color = "dark";
   }
  }
}
