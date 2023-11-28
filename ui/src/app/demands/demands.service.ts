import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Demand } from '../core/models';

@Injectable({
  providedIn: 'root',
})
export class DemandsService {
  constructor(private http: HttpClient) {}

  invoicesUrl = environment.apiUrl + '/invoices/';

  findAll() {
    return this.http.get<Demand[]>(this.invoicesUrl);
  }
  findOne(id: string) {
    return this.http.get<Demand>(this.invoicesUrl + id);
  }
  create(invoice: Demand) {
    return this.http.post<Demand>(this.invoicesUrl, invoice);
  }
  update(invoice: Demand, id: string) {
    return this.http.put<Demand>(this.invoicesUrl + id, invoice);
  }
  remove(id: string) {
    return this.http.delete(this.invoicesUrl + id);
  }
}
