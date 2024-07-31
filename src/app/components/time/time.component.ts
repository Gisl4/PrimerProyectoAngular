import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { UtilService } from '../../services/validations/util.service';
// import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent implements OnInit {

  formulario!: FormGroup;
  weather: any;
  name: any;
  temperature: any;
  Humidity: any;
  latitude: any;
  longitude: any;
  description: any;
  // showError: boolean;

  constructor(private fb: FormBuilder, private _weather: WeatherService, private _util: UtilService) {
    this.iniciaFormulario();
  }

  ngOnInit(): void {
    
  }

       /** Método para crear e iniciar un formulario **/
  iniciaFormulario() {
    this.formulario = this.fb.group({
      city: ['', [Validators.required, this._util.noMonterrey]],
      code: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })
  }

  consult() {
    console.log("Formulario: ", this.formulario);

    this._weather.getEstadoTiempo(this.formulario.get('city')?.value)
      .subscribe((respuesta: any) =>{
        console.log("respuesta: ", respuesta);
      })
  }

}
