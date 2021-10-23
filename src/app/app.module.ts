import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule as NgRxStoreModule, ActionReducerMap} from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoViajeComponent }  from './destino-viaje/destino-viaje.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent} from './destino-detalle/destino-detalle.component';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';
import { DestinosViajesState, 
  reducerDestinosViajes, 
  initializeDestinosViajesState,
  DestinosViajesEffects } from './models/destinos-viajes-state.models';

const routes: Routes = [
  { path: '',redirectTo:'home',pathMatch: 'full'},
  { path: 'home' , component: ListaDestinosComponent},
  { path: 'destino',component: DestinoDetalleComponent},
];

//redux init
 export interface AppState{
   destinos: DestinosViajesState;
 }
 const reducers: ActionReducerMap<AppState> = {
   destinos: reducerDestinosViajes
 };
 let reducerInitialState = {
   destinos: initializeDestinosViajesState()
 };
 //redux fin init

@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers, {initialState:reducerInitialState}),
    EffectsModule.forRoot([DestinosViajesEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
