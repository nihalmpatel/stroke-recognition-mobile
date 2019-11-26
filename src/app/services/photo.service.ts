import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private camera: Camera, private file: File) { }

  takePicture(sourceType) {
    const options: CameraOptions = {
      quality: 25,
      cameraDirection: 1,
      allowEdit: true,
      correctOrientation: true,
      sourceType: (sourceType == "camera" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY),
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    return this.camera.getPicture(options);
  }

}
