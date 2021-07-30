import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  public noPudeSerStrider (control: FormControl):ValidationErrors | null{
      const valor: string = control.value?.trim().toLowerCase();
      if(valor === 'strider'){
        return {noStrider: true};
      }

      return null;
      
  }

  public camposIguales(campo1: string, campo2: string){
    return (formGroup:AbstractControl): ValidationErrors | null => {
      
      const cam1 = formGroup.get(campo1)?.value;
      const cam2 = formGroup.get(campo2)?.value;
     
      if(cam1!==cam2){
        formGroup.get(campo2)?.setErrors({noIguales: true});
        return {noIguales: true};
      }else{
        formGroup.get(campo2)?.setErrors(null);
      }
            
      return null;
    }
  }

}
