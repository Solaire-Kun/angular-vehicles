import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './interface.response';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  fetchBrand(tipo: string, brand: string): Observable<Response[]> {
    const basePath = 'https://parallelum.com.br/fipe/api/v1/';
    return this.http.get<Response[]>(basePath + tipo + '/' + brand);
  }

  fetchModels(tipo: string, brand: string, brandCode?: string): Observable<Response["modelos"]> {
    const basePath = 'https://parallelum.com.br/fipe/api/v1/';
    return this.http.get<Response["modelos"]>(basePath + tipo + '/' + brand + '/' + brandCode + '/modelos/');
  }

  fetchYears(tipo: string, brand: string, brandCode?: string, modelCode?: string): Observable<Response[]> {
    const basePath = 'https://parallelum.com.br/fipe/api/v1/';
    return this.http.get<Response[]>(basePath + tipo + '/' + brand + '/' + brandCode + '/modelos/' + modelCode + '/anos/');
  }

  fetchDetails(tipo: string, brand: string, brandCode?: string, modelCode?: string, years?: string): Observable<Response[]> {
    const basePath = 'https://parallelum.com.br/fipe/api/v1/';
    return this.http.get<Response[]>(basePath + tipo + '/' + brand + '/' + brandCode + '/modelos/' + modelCode + '/anos/' + years);
  }
}
