import { Component, Input, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-temp-unit',
  templateUrl: './temp-unit.component.html',
  styleUrls: ['./temp-unit.component.css']
})
export class TempUnitComponent implements OnInit {
  @Input() title: string
  selectedUnit: string = "C"

  units: {[key: string]: string} = {
    "C": "Celsius",
    "F": "Fahrenheit"
  }
  
  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
  }

  sendValue(){
    this.interactionService.sendMessage("unit:" + this.selectedUnit)
  }
}
