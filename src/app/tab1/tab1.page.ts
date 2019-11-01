import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  photo;

  constructor(public photoService: PhotoService) {}

  capturePhoto = () => {
    this.photoService.takePicture().then(imageData => {
      this.photo = 'data:image/jpeg;base64,' + imageData;
      console.log('Photo Captured:', this.photo);
    }, (err) => {
      console.log("Camera issue: " + err);
    })
  }

}
