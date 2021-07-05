import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product }  from '../app/Models/Product';
import { Observable } from 'rxjs';
import {Image } from '../app/Models/Image';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  addProduct(product : Product){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post('http://localhost:8080/products', product, {headers : headers});
    
  }

  getProducts():Observable<Product[]>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.get<Product[]>('http://localhost:8080/products',{headers : headers})
  }

  /*saveImage(image : Image){
    
  } */
}
