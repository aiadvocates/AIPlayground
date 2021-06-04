import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {
  @ViewChild('uploadFile', { static: true }) uploadFile: ElementRef; public isAnalysing = false;
  imageRawString: string = null;
  image = {
    fixedWidth: 700,
    ratio: 0
  };
  objects = [];

  constructor (private http: HttpClient) { }

  ngOnInit(): void { }

  analyze(imageUrl) {

    this.isAnalysing = true;

    let httpOptionsFace = {
      headers: new HttpHeaders({
        'Ocp-Apim-Subscription-Key': environment["faceKey"],
        'Content-Type': 'application/json'
      }),
      params: new HttpParams({
        fromObject: {
          'returnFaceId': 'true',
          'returnFaceLandmarks': 'false',
          'returnFaceAttributes': 'mask',
          'recognitionModel': 'recognition_04',
          'returnRecognitionModel': 'false',
          'detectionModel': 'detection_03',
          'faceIdTimeToLive': '86400'
        }
      })
    };

    let httpOptionsVision = {
      headers: new HttpHeaders({
        'Ocp-Apim-Subscription-Key': environment["visionKey"],
        'Content-Type': 'application/json'
      }),
      params: new HttpParams({
        fromObject: {
          'visualFeatures': 'Description',
          'language': 'en',
          'model-version': 'latest',
          'details': 'Celebrities'
        }
      })
    };
    const body = {
      'url': imageUrl.value || 'https://s.yimg.com/ny/api/res/1.2/yQJVFoNwA.cX2_ODefOYAA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MA--/https://media.zenfs.com/en/who_what_wear_581/daf991a3fae971512759988c1872ce7b'
    };
    
    //Face API call
    this.http.post(environment["faceEndPoint"], body, httpOptionsFace).subscribe(res => {
      console.log('response is ', res);
      this.isAnalysing = false;
    });
    // Vision API call
    this.http.post(environment["visionEndPoint"], body, httpOptionsVision).subscribe(res => {
      console.log('vision Response ', res);
      this.isAnalysing = false;
    });
  }
}
