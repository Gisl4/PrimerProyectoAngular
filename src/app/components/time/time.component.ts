import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { UtilService } from '../../services/validations/util.service';
import { error } from 'node:console';
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
  humidity: any;
  latitude: any;
  longitude: any;
  description: any;
  showError: boolean = false;
  mensajeError: string = "";
  date = new Date();

  constructor(private fb: FormBuilder, private _weather: WeatherService, private _util: UtilService) {
    this.iniciaFormulario();
  }

  ngOnInit(): void {
    
  }

  iniciaFormulario() {
    this.formulario = this.fb.group({
      city: ['', [Validators.required, this._util.noMonterrey]],
      code: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })
  }

  consult() {
    console.log("Formulario: ", this.formulario);

    this._weather.getEstadoTiempo(this.formulario.get('city')?.value, this.formulario.get('code')?.value)
      .subscribe((respuesta: any) =>{
        this.showError = false;
        this.weather = respuesta;
        this.name = this.weather.name;
        this.temperature = this.weather.main.temp;
        this.humidity = this.weather.main.humidity;
        this.latitude = this.weather.coord.lat;
        this.longitude = this.weather.coord.lon;
        this.description = this.weather.weather[0].description;

        console.log("respuesta: ", respuesta);
      },
      (error:any) =>{
        this.showError = true;
        this.mensajeError = "Error when consulting the weather";
      }
    )
  }

}
