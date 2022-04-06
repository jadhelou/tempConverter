import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temp-unit',
  templateUrl: './temp-unit.component.html',
  styleUrls: ['./temp-unit.component.css']
})
export class TempUnitComponent{
  @Input() title: string
  selectedUnit: string = "C"

  units: {[key: string]: string} = {
    "C": "Celsius",
    "F": "Fahrenheit"
  }
}
