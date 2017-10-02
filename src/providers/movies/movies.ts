import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {

  private baseApiPath = "https://api.themoviedb.org/3/";
  private apiKey = "API_KEY";

  constructor(public http: Http) {
    console.log('Hello MoviesProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "movie/popular?api_key=" + this.apiKey + "&language=pt-BR");
    //return this.http.get("http://app.maissaudeonline.com.br:8000/api/consultas/");
  }

}
