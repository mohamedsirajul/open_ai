// tree-count.component.ts

import { Component } from '@angular/core';
import { DatapassService } from 'src/app/services/datapass.service';

@Component({
  selector: 'app-tree-count',
  templateUrl: './tree-count.component.html',
  styleUrls: ['./tree-count.component.css']
})
export class TreeCountComponent {

  constructor(private treeCountService: DatapassService) { }

  openMapCaptureImage() {
    const captureData = {
      x: window.screenX,
      y: window.screenY,
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.treeCountService.openMapCaptureImage(captureData)
      .subscribe(
        (response: any) => {
          console.log(response.message);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
