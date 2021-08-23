import { Car } from './../models/car';
import { ListResponsModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44359/api';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponsModel<CarDetail>> {
    let newPath = this.apiUrl + '/cars/getcardetail';
    return this.httpClient.get<ListResponsModel<CarDetail>>(newPath);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponsModel<CarDetail>> {
    let newPath = this.apiUrl + '/cars/getbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponsModel<CarDetail>>(newPath);
  }
}
