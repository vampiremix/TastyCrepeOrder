import { Component } from '@angular/core';
import { CustomerPage } from '../customer/customer';
import { HomePage } from '../home/home';
import { ProductPage } from '../product/product';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CustomerPage;
  tab3Root = ProductPage;

  constructor() {

  }
}
