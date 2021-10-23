import { Component,EventEmitter,Output ,OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import { DestinoApiClient} from './../models/destinos-api-client.models';
import { AppState } from '../app.module';
import { Store } from '@ngrx/store';
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../models/destinos-viajes-state.models';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.scss']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all;

  constructor( private destinosApiClient: DestinoApiClient, private store: Store<AppState>) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.store.select(state => state.destinos.favorito)
        .subscribe(d =>{
          if ( d != null){
            this.updates.push('se ha elegido a' + d.nombre);
          }
        });
        store.select(state => state.destinos.items).subscribe(items => this.all = items); 
   }

  ngOnInit(): void {
  }
  
  agregado(d: DestinoViaje){
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
    this.store.dispatch(new NuevoDestinoAction(d));
  }

  elegido(e: DestinoViaje){
    this.destinosApiClient.elegir(e)
    e.setSelected(true);
    this.store.dispatch(new ElegidoFavoritoAction(e));
  }

}
     