import { Component } from '@angular/core';
import {CentroidModel} from "../model/centroid.model";
import {CentroidService} from "../service/centroid.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Centroid';

  centroidService = new CentroidService();
  x: number = 0;
  y: number = 0;
  centroidModel = new CentroidModel(0, 0);

  public addCentroid() {
    this.centroidService.addCentroid(this.x, this.y)
  }

  public calculateCentroid() {
    this.centroidModel = this.centroidService.calculateCenter()
  }

}
