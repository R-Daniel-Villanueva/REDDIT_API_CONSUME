import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';


/*
  Generated class for the ProveedorhtmlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorhtmlProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProveedorhtmlProvider Provider');
  }
obtenerDatos(){
  //URL QUE UTILIZAMOS COMO PROVEEDOR
  //URL DE PRUEBA//return this.http.get('https://jsonplaceholder.typicode.com/users');
  return this.http.get('https://www.reddit.com/.json');
}

}
