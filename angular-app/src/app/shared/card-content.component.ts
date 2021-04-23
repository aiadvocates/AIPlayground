import { Component, OnInit, Input } from '@angular/core';
import {CognitiveService} from '../services/cognitive.service';

@Component({
  selector: 'app-card-content',
  template: `
    <div class="card-content">
      <div class="content">
        <div class="name">{{ name }}</div>
        <div class="description">{{ description }}</div>
        <div>
            <!-- <input></input> -->
            <button (click)="onClick()">Analyze</button> 
        </div>
      </div>
    </div>
  `
})
export class CardContentComponent implements OnInit {
  @Input() name;
  @Input() description;

  constructor(private cognitiveService: CognitiveService) {}

  ngOnInit() {}

  onClick = () =>{
    this.cognitiveService.analyzeImage();
  }

}
