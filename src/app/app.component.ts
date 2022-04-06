import {Component, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { TempUnitComponent } from './temp-unit/temp-unit.component';
import { TextboxComponent } from './textbox/textbox.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'tempConverter';
  result = '';
  @ViewChild(TextboxComponent) txtValue: TextboxComponent
  @ViewChild(TempUnitComponent) ddlUnit: TempUnitComponent

  constructor(private dialog: MatDialog){}
  
  receiveMessage(){
    
    if(this?.txtValue?.numValue){
      if(isNaN(+this.txtValue.numValue)){
        const dialogConfig = new MatDialogConfig();
        
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          title: "Temperature Converter",
          value: this.txtValue.numValue + ' is not a number!'
        }
        this.dialog.closeAll()
        this.dialog.open(PopUpComponent, dialogConfig)
      } else{
        let numResult: number
        if(this?.ddlUnit.selectedUnit == "C"){
          numResult = (+this.txtValue.numValue - 32) * 5/9
          this.result = (Math.round(numResult * 100) / 100).toFixed(2); + ''
        } else if(this?.ddlUnit.selectedUnit == "F"){
          numResult = (+this.txtValue.numValue * 1.8) + 32
          this.result = (Math.round(numResult * 100) / 100).toFixed(2); + ''
        }
      }
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
