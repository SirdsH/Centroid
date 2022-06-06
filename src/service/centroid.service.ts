import {CentroidModel} from "../model/centroid.model";

export class CentroidService {
  x: number = 0;
  y: number = 0;
  private centroidArr: CentroidModel[] = []


  public calculateCenter(): CentroidModel {
    this.x=0
    this.y=0
    let centroid: CentroidModel = new CentroidModel(this.x, this.y);
    for (let i = 0; i < this.centroidArr.length; i++) {
      this.x += this.centroidArr[i].x
      this.y += this.centroidArr[i].y
    }
    centroid.x = this.x / this.centroidArr.length
    centroid.y = this.y / this.centroidArr.length
    console.log(centroid)
    return centroid;
  }

  public addCentroid(x: number, y: number) {
    let centroid: CentroidModel = new CentroidModel(this.x, this.y);
    centroid.x = x
    centroid.y = y
    this.centroidArr.push(centroid)
    console.log(this.centroidArr)
  }

}
