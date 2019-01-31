import { Component } from '@angular/core';
import { TerminadosPage } from '../../pages/terminados/terminados.component';
import { PendientesPage } from 'src/pages/pendientes/pendientes.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Tab1Page = PendientesPage;
  Tab2Page = TerminadosPage;
}
