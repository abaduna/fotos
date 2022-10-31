import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-listarimagenen',
  templateUrl: './listarimagenen.component.html',
  styleUrls: ['./listarimagenen.component.css']
})
export class ListarimagenenComponent implements OnInit {
  temrino=""
  suscripcion:Subscription
  louding = false

  listImaganes:any[]= []
  constructor(private _imagenservices:ImagenService) { 
    this.suscripcion =this._imagenservices.getTerminoBusqueda().subscribe(data=>{
      
      this.temrino = data
      this.obtenerimaganes()
      this.louding = true
    })
  }

  ngOnInit(): void {
  }
  obtenerimaganes(){
    this._imagenservices.getImaganes(this.temrino).subscribe(data=>{
      this.louding =false
      if(data.hits.length === 0 ){
        this._imagenservices.setError("opps... no encontramos ningun resultado")
        return
      }
      this.listImaganes = data.hits

    },error =>{
      this._imagenservices.setError("opps ocurrrio un error")
      this.louding =false
    })
  }
}
