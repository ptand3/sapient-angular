import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Product } from "./model/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  localUrl = "assets/product.json";

  productItems: Product []= [];

  constructor(private http: HttpClient) { }

  // getting the response of the type and returning the observable 
  getProduct(): Observable<HttpResponse<Product []>> {
    return this.http.get<Product[]>( this.localUrl , { observe: 'response' });
  }
}