import { Component, Input, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() title: string

  name: string
  numValue: string

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
  }
  
  sendValue(){
    this.interactionService.sendMessage("val:" + this.numValue)
  }
}
