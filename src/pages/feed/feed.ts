import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:string = "Lucca Dumas Var";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  /*public num1:number = 10;
  public num2:number = 15;
  public res: number = this.num1 + this.num2;*/

  public res:number;

  public somaDoisNumeros(num1:number, num2:number):void{
    this.res = num1 + num2;
    //alert("Resultado: " + this.res);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 20);
  }

}
