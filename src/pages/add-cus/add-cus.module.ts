import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCus } from './add-cus';

@NgModule({
  declarations: [
    AddCus,
  ],
  imports: [
    IonicPageModule.forChild(AddCus),
  ],
  exports: [
    AddCus
  ]
})
export class AddCusModule {}
