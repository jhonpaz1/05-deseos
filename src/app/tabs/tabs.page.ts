import { Component } from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';
import { PendientesPage } from '../../pages/pendientes/pendientes.component';
import { Tab2Page } from '../tab2/tab2.page';
import { TerminadosPage } from '../../pages/terminados/terminados.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  Tab1Page = PendientesPage;
  Tab2Page = TerminadosPage;

  constructor() {

  }
}
