import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponsModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44359/api/brands/"

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponsModel<Brand>>{
    let newPath = this.apiUrl+"getall";
    return this.httpClient.get<ListResponsModel<Brand>>(newPath);
  }
    
  }

