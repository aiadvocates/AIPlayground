// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// require( 'dotenv' ).config();
export const environment = {
  production: false,
  // key: process.env.
  API: 'api',
  faceEndPoint: 'https://westus2.api.cognitive.microsoft.com/face/v1.0/detect',
  faceKey: '92f869a670f64416ac59d888b2004127',
  visionKey: '8f658bf03f2d4c919549e5a749782246',
  visionEndPoint: 'https://westus2.api.cognitive.microsoft.com/vision/v3.0/analyze?visualFeatures=Categories&details=Celebrities&language=en',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
