import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-erorres',
  templateUrl: './erorres.component.html',
  styleUrls: ['./erorres.component.css']
})
export class ErorresComponent implements OnInit, OnDestroy {
  texto = ""
  mostar = false
  suscripcion: Subscription
  
  constructor(private _imganServi:ImagenService
     ) 
  {
    this.suscripcion = this._imganServi.getError().subscribe(data =>{
      this.texto = data
      this.mostarMensaje()
      
    })
   }

  ngOnInit(): void {
  }
  mostarMensaje(){
    this.mostar = true
   setTimeout(() => {
    this.mostar = false
   }, 2000);
  }
  ngOnDestroy(): void {
      this.suscripcion.unsubscribe();
  }
}
