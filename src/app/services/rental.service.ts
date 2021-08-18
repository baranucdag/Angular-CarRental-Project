import { Rental } from './../models/rental';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponsModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44359/api/rentals/";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponsModel<Rental>>{
    return this.httpClient.get<ListResponsModel<Rental>>(this.apiUrl);
}
}
