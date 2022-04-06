import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{

  @Input() title: string
  @Output() messageEvent = new EventEmitter<string>()

  convertClick(){
    this.messageEvent.emit()
  }
}
