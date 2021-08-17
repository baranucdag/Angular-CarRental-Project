import { Colour } from './../models/colour';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponsModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  apiUrl="https://localhost:44359/api/colours/getall";
  constructor(private httpClient:HttpClient) { }

  getColours():Observable<ListResponsModel<Colour>>{
    let newPath = this.apiUrl;
    return this.httpClient.get<ListResponsModel<Colour>>(newPath);
  }
}
