import {Component} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'tempConverter';
 
  constructor(private dialog: MatDialog){

  }
  
  receiveMessage($event: any){
    console.log($event)
    
    if($event && $event.includes("val:")){
      let numVal = $event.substring($event.indexOf("val:") + 4)
      if(isNaN(+numVal)){
        const dialogConfig = new MatDialogConfig();
        
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          title: "Temperature Converter",
          value: numVal + ' is not a number!'
        }
        this.dialog.closeAll()
        this.dialog.open(PopUpComponent, dialogConfig)
      }
    } else if($event && $event.includes("unit:")){
      let unit = $event.substring($event.indexOf("unit:") + 4)
      
    } else{
      const dialogConfig = new MatDialogConfig();
        
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          title: "Temperature Converter",
          value:  "Please input a number!"
        }
        this.dialog.closeAll()
        this.dialog.open(PopUpComponent, dialogConfig)
    }
  }
  
}
