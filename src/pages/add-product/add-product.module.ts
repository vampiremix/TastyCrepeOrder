import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProduct } from './add-product';

@NgModule({
  declarations: [
    AddProduct,
  ],
  imports: [
    IonicPageModule.forChild(AddProduct),
  ],
  exports: [
    AddProduct
  ]
})
export class AddProductModule {}
