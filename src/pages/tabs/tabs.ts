import { Component } from '@angular/core';
import { PendientesPage } from 'src/pages/pendientes/pendientes.component';
// import { Tab2Page } from '../tab2/tab2.page';
import { TerminadosPage } from '../../pages/terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class Tab1Page {
  Tab1Page = PendientesPage;
  Tab2Page = TerminadosPage;
}
