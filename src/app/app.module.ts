import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { CustomerPage } from '../pages/customer/customer';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImagePicker } from '@ionic-native/image-picker';
import { AddCus } from '../pages/add-cus/add-cus';
import { ProductPage } from '../pages/product/product';
import { AddProduct } from '../pages/add-product/add-product';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '2fccffbb'
  }
};

@NgModule({
  declarations: [
    MyApp,
    CustomerPage,
    AddCus,
    HomePage,
    TabsPage,
    ProductPage,
    AddProduct
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CustomerPage,
    AddCus,
    HomePage,
    TabsPage,
    ProductPage,
    AddProduct
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
