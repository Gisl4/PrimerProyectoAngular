import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.iniciaFormulario();
  }

  ngOnInit(): void {
    
  }

  /** Método para crear e iniciar un formulario **/
  iniciaFormulario() {
    this.formulario = this.fb.group({
      city: ['Madrid'],
      code: ['0000']
    })
  }

  consult() {
    
  }

}
