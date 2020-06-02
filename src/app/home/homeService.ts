import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class homeService {

	constructor(public httpClient: HttpClient ) { 
  }

  getAll() {
      return this.httpClient.get('https://covidma.herokuapp.com/api')
      }
  getAll2(){
    return this.httpClient.get('https://services3.arcgis.com/hjUMsSJ87zgoicvl/arcgis/rest/services/Covid_19/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json');
  }
  
}
