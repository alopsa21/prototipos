import { Injectable } from '@angular/core';
import { Saludo } from './saludo';
import { Headers, Http } from '@angular/http';
import { SALUDO } from './mock-saludos';


import 'rxjs/add/operator/toPromise';


@Injectable()
export class SaludoDataService {
  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  private lastId: number = 0;

  // Placeholder for saludo's
  private saludos: Saludo[] = [];

  private saludosUrl = 'api/saludos';  // URL to web api

  constructor(private http: Http) { }

  // Simulate GET /todos
  getAllSaludos(): Promise<Saludo[]> {
    return Promise.resolve(SALUDO);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
