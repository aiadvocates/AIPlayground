import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { FaceClient, FaceModels } from '@azure/cognitiveservices-face';
import { finalize, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CognitiveService {

  constructor (private http: HttpClient) { }

  faceKey = environment.faceKey;
  faceEndPoint = environment.faceEndPoint;

  detectMask = () => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': environment.visionKey
      }),
      returnFaceLandmarks: true
    };
    const url = environment.visionEndPoint;

    const body = {
      "url": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/01/931/524/Prince-Philip-AP.jpg?ve=1&tl=1"
    };
    this.http.post(url, body, httpOptions)
      .pipe(
        catchError(this.handleError())
      );

  };
  analyzeImage = () => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': environment.visionKey
      }),
      returnFaceLandmarks: true
    };
    const url = environment.visionEndPoint;

    const body = {
      "url": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/01/931/524/Prince-Philip-AP.jpg?ve=1&tl=1"
    };

    this.http.post(url, body, httpOptions)
      .pipe(
        catchError(this.handleError())
      );

  };
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${ error.status } with body "${ error.error }"`;

      // Let the app keep running by returning a safe result.
      return of(result);
    };

  }
}