import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M',Validators.required],
    notificaciones:[false,Validators.required],
    condiciones: [false,Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({...this.persona, condiciones: true});
    this.miFormulario.get('condiciones')?.valueChanges.subscribe(value=>{
      console.log(value);
      
    })
    this.miFormulario.valueChanges.subscribe(({condiciones,...restoDeArgumentos}) =>{
      //delete form.condiciones;
      this.persona = restoDeArgumentos;
    })
  }

  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;
    this.persona = formValue;
  }

}
