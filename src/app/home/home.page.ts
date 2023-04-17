import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonInput, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
})
export class HomePage {

  resultado: any;
  color: any;
  tema: any;
  checked: boolean;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.checked = false;
    this.formGroup = this.formBuilder.group({
      alcool: ['', [Validators.required, Validators.min(0.1)]],
      gasolina: ['', [Validators.required, Validators.min(0.1)]]
    });
  }

  ngOnInit(){
    this.resultado = "Álcool ou Gasolina?";
    this.color = "dark";
    this.tema = "dark";
  }

  calcularQualUsar() {
    let valores = this.formGroup.value;
    let calculo = +valores.alcool / +valores.gasolina;
    if(calculo <= 0.7 ){
      this.resultado = 'Abastecer com Álcool'
      this.color = "primary"
    }else {
      this.resultado = 'Abastecer com Gasolina';
      this.color = "warning"
    }
  }

  mudarTema(){
    this.checked ? this.tema = "dark" : this.tema = "light";
    this.checked = !this.checked;
  }

  limparEntradas(){
    let valores = this.formGroup.value;
    valores.alcool = '';
    valores.gasolina = '';
    this.resultado = "Álcool ou Gasolina?";
    this.color = "dark";
  }
}
