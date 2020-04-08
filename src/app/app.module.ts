import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';

import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HomeComponent } from './components/home/home.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { NacionalesComponent } from './components/noticias/Nacionales/nacionales.component';
import { InternacionalesComponent } from './components/noticias/internacionales/internacionales.component';
import { NoticiasFalsasComponent } from './components/noticias/noticias-falsas/noticias-falsas.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { MedidasComponent } from './components/medidas/medidas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Nacionales', component: NacionalesComponent },
  { path: 'Internacionales', component: InternacionalesComponent },
  { path: 'sobreNosotros', component: SobreNosotrosComponent },
  { path: 'medidas', component: MedidasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NacionalesComponent,
    SobreNosotrosComponent,
    InternacionalesComponent,
    NoticiasFalsasComponent,
    DonacionesComponent,
    MedidasComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
    //NgxStripeModule.forRoot('')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
