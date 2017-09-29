import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { FilmesPage } from '../filmes/filmes';
//import { ListaPage } from '../lista/lista';
//import { Teste2Page } from '../teste2/teste2';
//import { TestePage } from '../teste/teste';
//import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  //tab2Root = AboutPage;
  //tab3Root = ContactPage;
  tab4Root = FeedPage;
  tab5Root = FilmesPage;
  //tab5Root = ListaPage;
  //tab7Root = Teste2Page;
  //tab6Root = TestePage;
  //tab4Root = IntroPage;

  constructor() {

  }
}
