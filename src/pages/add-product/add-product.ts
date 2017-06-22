import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the AddProduct page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProduct {
  public pName: any;
  public pPrice: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProduct');
  }
  addPro(): Promise<any> {
    return this.http.post('https://tastycrepe.herokuapp.com/product', { Name: this.pName, Price: this.pPrice })
      .toPromise()
      .then(res => {
        console.log("Post PRODUCT" + res);
        // Promise.resolve(this.customer = res.json()[0].menuItem);    
      })
      .catch(err => {
        Promise.reject(err.message || err);
      });
  }
}
