import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['',[Validators.required,Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    username: ['',[Validators.required,this.validatorService.noPudeSerStrider]],
    password: ['',[Validators.required,Validators.minLength(6)]],
    password2: ['',[Validators.required]],
    
  },{
    validators:[this.validatorService.camposIguales('password','password2')]
  });

  get emailErrorMsg() :string{
    let msg: string = '';
    const errors = this.miFormulario.get('email')?.errors;
    console.log('Error -> ',errors);

    if(errors?.required){
      msg = 'El email es requerido.';
    }else if(errors?.pattern){
      msg = 'El email no tiene el formato válido.';
    }else if(errors?.emailTomado){
      msg = 'El email ya está en uso.';
    }else{
      msg = 'Error desconocido';
    }
    
    return msg;
  }

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Manuel Guerrero',
      email:'test1@test.com',
      username: 'byManuel18',
      password: '123456',
      password2: '123456'
    })
  }


  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched;
  // }

  // emailFormato(){
  //   return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched;
  // }

  // emailTomado(){
  //   return this.miFormulario.get('email')?.errors?.emailTomado && this.miFormulario.get('email')?.touched;
  // }

  submitFormulario(){
    console.log(this.miFormulario);
    this.miFormulario.markAllAsTouched();
    
  }

}
