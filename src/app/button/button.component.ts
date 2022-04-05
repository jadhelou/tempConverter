import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() title: string
  @Output() messageEvent = new EventEmitter<string>()
  valueMessage: string

  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
    this.interactionService.valueMessage$.subscribe(message => this.valueMessage = message)
  }

  convertClick(){
    this.messageEvent.emit(this.valueMessage)
  }
}
