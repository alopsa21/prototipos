import { Injectable } from '@angular/core';
import { Saludo } from './saludo';
import { Headers, Http } from '@angular/http';
import { SALUDO } from './mock-saludos';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SaludoDataService {
  getAllSaludos(): Promise<Saludo[]> {
    return Promise.resolve(SALUDO);
  }

  getSaludo(id: number): Promise<Saludo> { 
    return this.getAllSaludos().then(saludos => saludos.find(saludo => saludo.id === id));
  }

 
}
