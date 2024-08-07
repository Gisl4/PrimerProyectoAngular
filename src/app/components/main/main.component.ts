import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  cities = ['Múnich', 'Düsseldorf', 'Leipzig', 'Stuttgart', 'Friburgo'];
  showCity: boolean = true;
  changeCss: boolean = true;

  constructor() {}

  ngOnInit(): void {

  }

  show() {
    this.showCity = !this.showCity;
  }

  exchangeCss() {
    this.changeCss = !this.changeCss;
  }

}
