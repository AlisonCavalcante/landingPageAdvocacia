import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageDetalhesComponent } from './views/page-detalhes/page-detalhes.component';
import { AreasPageComponent } from './views/areas-page/areas-page.component';
import { SobrePageComponent } from './views/sobre-page/sobre-page.component';
import { ContatoPageComponent } from './views/contato-page/contato-page.component';
import { CampoControlErroComponent } from './components/campo-control-erro/campo-control-erro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    PageDetalhesComponent,
    AreasPageComponent,
    SobrePageComponent,
    ContatoPageComponent,
    CampoControlErroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
