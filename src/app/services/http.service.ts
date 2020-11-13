import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private FEATURE_FLAG_URL = 'http://localhost:8080/features/isEnabled';

  constructor(private httpService: HttpClient) { }

  public determineIfFeatureEnabled(): Observable<any> {
    return this.httpService.get<any>(this.FEATURE_FLAG_URL);
  }

}


