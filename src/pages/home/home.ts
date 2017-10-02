import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilmesPage } from '../filmes/filmes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToFilmesPage(){
    this.navCtrl.push(FilmesPage);
  }

}
