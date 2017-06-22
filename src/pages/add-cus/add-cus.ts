import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the AddCus page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-cus',
  templateUrl: 'add-cus.html',
})
export class AddCus {
  public img: any;
  public userimg: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private imagePicker: ImagePicker,public http: Http) { 
     this.userimg = "http://res.cloudinary.com/cyber-advance-system-and-network/image/upload/v1494999940/contact-icon_ngkkpi.png";
  } 
 ionViewDidLoad() {
    console.log('ionViewDidLoad AddCustomer');
 }


  imgpick() {
    let Option = { maximumImagesCount: 1, outputType: 1 };
    // this.imagePicker.hasReadPermission().then(() => {
      this.imagePicker.getPictures(Option).then(result => {
        this.img = result;
        this.userimg = result;
      }).catch(()=>{

      })
    // }).catch(() => {
    //   this.imagePicker.requestReadPermission().then(()=>{
    //     this.imagePicker.getPictures(Option).then(result => {
    //     this.img = result;
    //   }).catch(()=>{
        
    //   })

    //   }).catch(()=>{


    //   })

    // })
  }
}