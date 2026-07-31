import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import { Escala } from '../models/escala';

@Injectable({
  providedIn: 'root',
})
export class EscalaService extends BaseService<Escala> {

  constructor(http: HttpClient) {
    super(http, `${environment.api}/escala`);
  }
}
