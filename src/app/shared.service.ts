import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TextboxComponent } from './textbox/textbox.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private textbox = new BehaviorSubject<TextboxComponent>(new TextboxComponent())
  
  constructor(){}

  loadComponent(textbox: TextboxComponent){
    this.textbox.next(textbox)
  }

  getComponent(): Observable<TextboxComponent>{
    return this.textbox.asObservable()
  }
}
