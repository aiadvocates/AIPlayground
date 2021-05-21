import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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

  ngOnInit(): void {
  }
  openImageBrowseDialog() {
    this.uploadFile.nativeElement.click();
  }


  readFile(input) {
    console.log('input is ', input);
    // if (input.files.length === 0)
    // {
    //   return;
    // }

    this.isAnalysing = true;
    this.objects = [];

    const file: File = input.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.imageRawString = event.target.result;
    });

    reader.readAsDataURL(file);
    this.analyze(file);

  }
  analyze(file) {
    console.log("analyzing");

    let httpOptions = {
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


    const body = {
      'url': 'https://assets.vogue.com/photos/5f346ee7f5c0a7f18f953a7d/1:1/w_1650,h_1650,c_limit/GettyImages-1228017856.jpg'

      // "url": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/01/24/19/prince-philip-gt.jpg?width=1200&auto=webp&quality=75"
    };
    this.http.post(environment["faceEndPoint"], body, httpOptions).subscribe(res => {
      console.log('response is ', res);
      // this.image.ratio = res['metadata']['width'] / this.image.fixedWidth;
      // this.objects = res['objects'];
      this.isAnalysing = false;
    });
  }


}
