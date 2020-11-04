import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LaunchServicesService {
  baseUrl = "https://api.spaceXdata.com/v3/launches?limit=100";
  constructor(private http:HttpClient) { }
  getAllLaunchProg() {
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100").pipe();
  }
  getSpecificLaunchProg(launchyear, launchFlag, LandingFlag) {
    let lAdditionalAttrs = '';
    if(launchyear){
      lAdditionalAttrs += "&launch_year="+launchyear;
    }if(launchFlag){
      lAdditionalAttrs += "&launch_success="+launchFlag;
    }if(LandingFlag){
      lAdditionalAttrs += "&land_success="+LandingFlag;
    }
    return this.http.get(this.baseUrl+lAdditionalAttrs).pipe();
  }
}
