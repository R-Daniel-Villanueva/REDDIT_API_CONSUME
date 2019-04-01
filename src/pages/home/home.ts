import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {ProveedorhtmlProvider} from '../../providers/proveedorhtml';
import { ProveedorhtmlProvider } from '../../providers/proveedorhtml/proveedorhtml';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //DECLARATION OF ARRAY
  // array:any[];
  
  usuarios:any[];

  constructor(
    public navCtrl: NavController,
    public proveedor: ProveedorhtmlProvider
  ) {
    
    // this.array=[
    //   {
    //     "id":1,
    //     "title":"Tittle 1"
    //   },
    //   {
    //     "id":2,
    //     "title":"Tittle 2"},
    //   {
    //     "id":3,
    //     "title":"Tittle 3"
    //   }
    // ];
    // console.log(this.array);
  }

  ionViewDidLoad(){
    this.proveedor.obtenerDatos()
      .subscribe(
        (data)=>{this.usuarios=data.data['children'];
      console.log(this.usuarios);},
        // (data)=>{this.usuarios=data['children'][0].data;},
        (error)=>{console.log(error);}
      ) 
  }

}
