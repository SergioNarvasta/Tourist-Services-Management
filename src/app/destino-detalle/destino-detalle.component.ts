import { Component, OnInit } from '@angular/core';
import { DestinoApiClient } from './../models/destinos-api-client.models';
import { DestinoViaje } from './../models/destino-viaje.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.scss']
})
export class DestinoDetalleComponent implements OnInit {
  destino: DestinoViaje;
  constructor(private route: ActivatedRoute, private destinoApiClient: DestinoApiClient) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.destino= null;
    //this.destinoApiClient.getById(id);
  }

}
