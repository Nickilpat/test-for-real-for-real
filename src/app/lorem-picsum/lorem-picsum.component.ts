import { HttpService } from './../services/http.service';
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
  public isFeatureEnabled;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
     this.imageWidth = 200;
     this.imageHeight = 200;

     this.httpService.determineIfFeatureEnabled().subscribe((data) => {
       this.isFeatureEnabled = data;
     });

  }

}
