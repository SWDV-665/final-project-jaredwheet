import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  imagePath='';
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public camera: Camera) {

  }
  sharePage() {
    console.log("Share Page");
    this.showSharePagePrompt();
  }

  showSharePagePrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Share Page',
      message: "Please enter details",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: item => {
            console.log('Page sent', item);
          }
        }
      ]
    });
    prompt.present();
  }
  
  startCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((ImageData) => {
      this.imagePath = 'data.image/jpeg;base64,' + ImageData;
    }, err => {
      console.log('ERROR!')
    })
  }
}
