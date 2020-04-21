//custom routing module

import {NgModule, Component} from "@angular/core" ;
import {Route, RouterModule} from "@angular/router";
import {ProductComponent} from"../product/components/product/product.component";
import{ProductListComponent} from "../product/components/product-list/product-list.component"; 

//product specific route defination
const routes : Route[] =[
    {
        path : "", //will load the product compoenent when navigated to /products ;lazy loaded from app.routing module.ts
        component : ProductComponent,

        children :[  //load the child of the product , default is product list
            {path :"", component : ProductListComponent},
        ]

    }

]

@NgModule({

imports:[ RouterModule.forChild(routes)],
exports :[RouterModule]

})

export class ProductRoutingModule{

}