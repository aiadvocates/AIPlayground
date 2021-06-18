// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: true,
  API: 'api',
  cognitiveEndPoint: 'https://ai-blog-cognitive.cognitiveservices.azure.com/',
  faceEndPoint: 'https://westus2.api.cognitive.microsoft.com/face/v1.0/detect',
  faceKey: 'process.env.faceKey',
  visionKey: 'process.env.visionKey',
  visionEndPoint: 'https://westus2.api.cognitive.microsoft.com/vision/v3.2/analyze',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
