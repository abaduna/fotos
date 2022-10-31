import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { strict } from 'assert';
import { setDefaultResultOrder } from 'dns';
import { url } from 'inspector';
import { stringify } from 'querystring';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  private $error = new Subject<string>()
  private terminoBusqueda$ = new Subject<string>()
  constructor(private http:HttpClient) {
      
    }
    

   setError(mensaje: string){
      this.$error.next(mensaje)
} 
  getError():Observable<string>
  {
   
    return  this.$error.asObservable()
  }
envarterminp(termino: string){
  return  this.terminoBusqueda$.next(termino) 
}
getTerminoBusqueda():Observable<string>{
  return this.terminoBusqueda$.asObservable()
}
getImaganes(termino:string):Observable<any>
{
  const KEY = "30721827-b7b2bc9fb634819c1b2c4f9c0"
  const URL = 'https://pixabay.com/api/?key='+KEY+'&q='+ termino
   return this.http.get(URL)
}
}


