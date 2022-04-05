import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private valueMessageSource = new Subject<string>()
  valueMessage$ = this.valueMessageSource.asObservable()

  constructor() { }

  sendMessage(message: string){
    this.valueMessageSource.next(message)
  }
}
