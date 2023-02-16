import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {

  botonAlerta() {
    alert("Lo siento, ha presionado un boton de alerta. Intente de nuevo")
  }
}
