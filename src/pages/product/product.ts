import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddProduct} from '../add-product/add-product';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the Product page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
public products: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.getProduct();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Product');
  }
  openAddproduct(){
    this.navCtrl.push(AddProduct);
  }
doRefresh(refresher) {
    console.log('Begin async operation', refresher);
this.getProduct();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

 getProduct(): Promise<any> {
    return this.http.get('https://tastycrepe.herokuapp.com/product')
      .toPromise()
      .then(res => {
        Promise.resolve(this.products = JSON.stringify(res));
        console.log(this.products);
        // Promise.resolve(this.customer = res.json()[0].menuItem);    
      })
      .catch(err => {      
        Promise.reject(err.message || err);  
      });
  }
}
