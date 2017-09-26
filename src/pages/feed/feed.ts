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

  public obj_feed = {
    /*username: "Lucca Dumas",
    date: "13 de Setembro de 2017",
    description: "Primeiro App Teste Ionic.",
    num_likes: 99,
    num_comments: 8,
    time_comment: "11h ago",*/

    user: [
      {
        id: 123,
        username: "Lucca Dumas",
        photo: "photo.jpg",
        address: [
          {
            street: "Avenida 77",
            house_number: 77
          },

          {
            street: "Avenida 777",
            house_number: 777
          }
        ]
      },
      {
        id: 456,
        username: "Isabele Maria",
        photo: "photo.jpg",
        address: [
          {
            street: "Avenida 88",
            house_number: 88
          },

          {
            street: "Avenida 888",
            house_number: 888
          }
        ]
      },
      {
        id: 789,
        username: "Francisco Caio",
        photo: "photo.jpg",
        address: [
          {
            street: "Avenida 99",
            house_number: 99
          },

          {
            street: "Avenida 999",
            house_number: 999
          }
        ]
      }
    ],

    post: [
      {
        date: "01 de abril de 1998",
        description: "Primeiro App Teste Ionic1.",
        img: "1.jpg",
        num_likes: 77,
        num_comments: 7,
        time_comment: "7h atrás"
      },

      {
        date: "20 de setembro de 2000",
        description: "Primeiro App Teste Ionic2.",
        img: "2.png",
        num_likes: 88,
        num_comments: 8,
        time_comment: "8h atrás"
      },

      {
        date: "01 de abril de 2000",
        description: "Primeiro App Teste Ionic3.",
        img: "3.jpg",
        num_likes: 99,
        num_comments: 9,
        time_comment: "9h atrás"
      },
    ],
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  /*public num1:number = 10;
  public num2:number = 15;
  public res: number = this.num1 + this.num2;*/

  public res: number;

  public somaDoisNumeros(num1:number, num2:number): void {
    this.res = num1 + num2;
    //alert("Resultado: " + this.res);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 20);
  }

}
