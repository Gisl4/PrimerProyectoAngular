import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  noMonterrey(control: FormControl){

    const value: string = control.value?.trim().toLowerCase();

    if( value === 'monterrey'){
      return {
        noMonterrey: true
      }
    }

    return null;
    
  }
}
