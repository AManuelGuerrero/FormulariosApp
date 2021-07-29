import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX ',
    precio: 10, 
    existencias: 15
  }
  constructor() { }

  ngOnInit(): void {
  }

  // guardar(miFormulario: NgForm){
  //   console.log(miFormulario.value);
    
  // }

  guardar(){
    console.log(this.miFormulario);
    console.log('Posteo correcto');

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
    
  }

  validarProducto():boolean{
    return this.miFormulario?.controls.producto?.touched && this.miFormulario?.controls.producto?.invalid;
  }
  validarPrecio():boolean{
    return this.miFormulario?.controls.precio?.touched && this.miFormulario?.controls.precio?.value < 0;
  }

}
