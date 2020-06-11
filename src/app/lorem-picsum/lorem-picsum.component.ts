import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lorem-picsum',
  templateUrl: './lorem-picsum.component.html',
  styleUrls: ['./lorem-picsum.component.css']
})
export class LoremPicsumComponent implements OnInit {

  public imageWidth = 200;
  public imageHeight = 300;
  public sizes: string[] = ['100', '200', '300', '400']; 

  constructor() {
    this.imageWidth = 200;
     this.imageHeight = 300;
   }

  ngOnInit(): void {
     this.imageWidth = 200;
     this.imageHeight = 300;
  }

}
