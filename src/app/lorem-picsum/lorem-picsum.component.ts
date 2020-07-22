import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lorem-picsum',
  templateUrl: './lorem-picsum.component.html',
  styleUrls: ['./lorem-picsum.component.scss']
})
export class LoremPicsumComponent implements OnInit {

  public imageWidth;
  public imageHeight;
  public sizes: string[];

  constructor() {
   }

  ngOnInit(): void {
     this.imageWidth = 200;
     this.imageHeight = 200;
  }

}
