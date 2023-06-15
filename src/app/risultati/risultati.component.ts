import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FetchService } from '../service/fetch.service';

@Component({
  selector: 'app-risultati',
  templateUrl: './risultati.component.html',
  styleUrls: ['./risultati.component.scss']
})
export class RisultatiComponent implements OnInit, OnChanges {

  constructor(private service: FetchService) {

  }


  items: any[] = [];
  tipo: string = "MARCHE";
  brandCode?: string = "";
  modelCode?: string = "";
  yearsCode?: string = "";

  @Input() categoria: string = '';

  ngOnInit(): void {
    this.fetch();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.items = [];
    this.tipo = 'MARCHE';
    this.fetch();
  }

  fetch(code?: string) {
    switch (this.tipo) {

      case 'MARCHE':
        this.service.fetchBrand(this.categoria, 'marcas').subscribe({
          next: response => {
            for (let i = 0; i < response.length; i++) {
              this.items.push(response[i]);
            }
            this.tipo = 'MODELLI';
          },
          error: err => {
            console.log(err);
          }
        })
        break;

      case 'MODELLI':
        this.items = [];
        this.service.fetchModels(this.categoria, 'marcas', code).subscribe({
          next: response => {
            this.brandCode = code;
            for (let i = 0; i < response.modelos.length; i++) {
              this.items.push(response.modelos[i]);
            }
            this.tipo = 'ANNO';
          },
          error(err) {
            console.log(err);
          }
        })
        break;

      case 'ANNO':
        this.items = [];
        this.service.fetchYears(this.categoria, 'marcas', this.brandCode, code).subscribe({
          next: response => {
            this.modelCode = code;
            for (let i = 0; i < response.length; i++) {
              this.items.push(response[i]);
            }
            this.tipo = 'DETTAGLI';
          },
          error(err) {
            console.log(err);
          }
        })
        break;

      case 'DETTAGLI':
        this.items = [];
        this.service.fetchDetails(this.categoria, 'marcas', this.brandCode, this.modelCode, code).subscribe({
          next: response => {
            this.yearsCode = code;
            this.items.push(response)
          },
          error(err) {
            console.log(err);
          }
        })
        break;
    }
  }
}
