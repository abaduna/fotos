import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'app-buscadordeimagenes',
  templateUrl: './buscadordeimagenes.component.html',
  styleUrls: ['./buscadordeimagenes.component.css']
})
export class BuscadordeimagenesComponent implements OnInit {
  nombredelaimafanes = "";
  constructor(private _imagen:ImagenService) { }

  ngOnInit(): void {
  }
  buscarImagenes(){
    if (this.nombredelaimafanes === "") {
      this._imagen.setError("Agregar un texto de busqueda")
      return
    }else{
      this._imagen.envarterminp(this.nombredelaimafanes)
    }
    
  }
}
