import { Component } from '@angular/core';
// import { PendientesPage } from 'src/pages/pendientes/pendientes.component';
// import { Tab2Page } from '../tab2/tab2.page';
// import { TerminadosPage } from '../../pages/terminados/terminados.component';
import { PendientesPage } from '../../pages/pendientes/pendientes.component';
import { TerminadosPage } from '../../pages/terminados/terminados.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Tab1Page = PendientesPage;
  Tab2Page = TerminadosPage;
}
