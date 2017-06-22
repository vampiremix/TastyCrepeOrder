import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AddCus } from '../add-cus/add-cus';
/**
 * Generated class for the Customer page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  public customer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.getCus();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Customer');
  }

  openAddcus() {
    this.navCtrl.push(AddCus);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getCus();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  getCus(): Promise<any> {
    return this.http.get('https://tastycrepe.herokuapp.com/customer')
      .toPromise()
      .then(res => {
        Promise.resolve(this.customer = res.json());
        // Promise.resolve(this.customer = res.json()[0].menuItem);    
      })
      .catch(err => {
        Promise.reject(err.message || err);
      });
  }
}
