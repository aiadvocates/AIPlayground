import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component( {
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: [ './vision.component.scss' ]
} )
export class VisionComponent implements OnInit {
  @ViewChild( 'uploadFile', { static: true } ) uploadFile: ElementRef; public isAnalysing = false;
  imageRawString: string = null;
  image = {
    fixedWidth: 700,
    ratio: 0
  };
  objects = [];
  constructor ( private http: HttpClient ) { }

  ngOnInit (): void {
  }
  openImageBrowseDialog () {
    this.uploadFile.nativeElement.click();
  }


  readFile ( input ) {
    if ( input.files.length === 0 ) {
      return;
    }

    this.isAnalysing = true;
    this.objects = [];

    const file: File = input.files[ 0 ];
    const reader = new FileReader();

    reader.addEventListener( 'load', ( event: any ) => {
      this.imageRawString = event.target.result;
    } );

    reader.readAsDataURL( file );
    this.analyze( file );

  }
  analyze ( file ) {
    console.log( "analyzing" );
    this.http.post( environment[ "Api-EndPoint" ], file, {
      headers: {
        'Ocp-Apim-Subscription-Key': environment[ "visionKey" ],
        'Content-Type': 'application/octet-stream'
      }
    } ).subscribe( res => {
      this.image.ratio = res[ 'metadata' ][ 'width' ] / this.image.fixedWidth;
      this.objects = res[ 'objects' ];
      this.isAnalysing = false;
    } );
  }


}
