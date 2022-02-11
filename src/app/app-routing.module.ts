import { ContatoPageComponent } from './views/contato-page/contato-page.component';
import { AreasPageComponent } from './views/areas-page/areas-page.component';
import { SobrePageComponent } from './views/sobre-page/sobre-page.component';
import { PageDetalhesComponent } from './views/page-detalhes/page-detalhes.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'pageDetalhes',
    component: PageDetalhesComponent,
  },
  {
    path:'sobrePage',
    component: SobrePageComponent,
  },
  {
    path:'areasPage',
    component: AreasPageComponent,
  },
  {
    path:'contatoPage',
    component: ContatoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
