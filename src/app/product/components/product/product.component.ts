import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../../product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {



  productItems: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProduct()  //Function to subscribe the data from card service
      .subscribe(resp => {
        console.log(resp);
        for (let item of (resp.body) as any) {
          this.productItems.push(item);
        }
      });
  }


  ngOnInit() {

  }


}
