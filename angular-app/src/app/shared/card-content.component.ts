import { Component, OnInit, Input } from '@angular/core';

@Component( {
  selector: 'app-card-content',
  template: `
    <div class="card-content">
      <div class="content">
        <div class="name">{{ name }}</div>
        <div class="description">{{ description }}</div>
        <div>
              <!-- <input type="file" style="display: none;" accept="image/*" (change)="readFile($event.target)" #uploadFile> -->
              <!-- <button *ngIf="!isAnalysing" class="upload-btn">Analyze</button> -->
              
              <h2 *ngIf="isAnalysing">Analysing.... Please Wait!</h2>
        </div>
      </div>
    </div>
  `
} )
export class CardContentComponent implements OnInit {
  @Input() name;
  @Input() description;
  @Input() analyze;

  public isAnalysing = false;
  ngOnInit () { }

  readFile () {

  }
}
