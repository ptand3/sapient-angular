import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ProductComponent} from "../product/components/product/product.component";
import {ProductListComponent} from "../product/components/product-list/product-list.component" ;
import {ProductRoutingModule} from "./product-routing-module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule //this gives product module access to its own routing module
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  providers:[]
})
export class ProductModule { }
