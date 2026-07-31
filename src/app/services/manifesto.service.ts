import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { Manifesto } from '../models/manifesto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManifestoService extends BaseService<Manifesto> {

  constructor(http: HttpClient) {
    super(http, `${environment.api}/manifesto`);
  }
}