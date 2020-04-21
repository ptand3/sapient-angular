import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../../product.service';
import { Product } from '../../model/product';
import { of } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  fieldName: string;

  @Input() productItems : Product ;

  constructor() {
  }
  ngOnInit(){
  }
}
