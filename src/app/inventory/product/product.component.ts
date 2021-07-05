import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/product.service';
import { Image } from '../../Models/Image';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  product : Product = new Product(0,"","")
  productMessage : any
  imageMessage : any
  products : Product[] = []
  image : Image = new Image(0, new File([],""))

  constructor(private service : ProductService) { }

  ngOnInit(): void {
  }

  addProduct(){
    console.log(this.product)
    let resp = this.service.addProduct(this.product)
    resp.subscribe(data => this.productMessage = data);
    
  }

  getProducts(){
    let resp = this.service.getProducts();
    resp.subscribe(data => this.products = data);
  }

  saveImage(){
    console.log(this.image);
  }

}
