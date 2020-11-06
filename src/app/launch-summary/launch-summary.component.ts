import { Component, OnInit } from '@angular/core';
import { LaunchServicesService } from '../launch-services.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService} from "ngx-spinner";
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-launch-summary',
  templateUrl: './launch-summary.component.html',
  styleUrls: ['./launch-summary.component.css']
})
export class LaunchSummaryComponent implements OnInit {
  launch_year = '';
  launch_success = '';
  landing_success = '';
  RecordDtls:any = [];
  orderObj;
  title = "SpaceX Launch Programs";
  counter(i: number) {
    return new Array(i);
}
  getLaunchProg ( ) {
    this.SpinnerService.show();  
    this.service.getAllLaunchProg().subscribe((Response) => {
        this.RecordDtls = Response;
        this.SpinnerService.hide();
    });
  }
  getSpecificProgDtls(){
    let lAdditionalAttrs = '?';
    if(this.launch_year){
      lAdditionalAttrs += "&launch_year="+this.launch_year;
    }if(this.launch_success){
      lAdditionalAttrs += "&launch_success="+this.launch_success;
    }if(this.landing_success){
      lAdditionalAttrs += "&land_success="+this.landing_success;
    }
    this.location.replaceState('/'+lAdditionalAttrs);
    this.SpinnerService.show();  
    this.service.getSpecificLaunchProg(this.launch_year, this.launch_success, this.landing_success).subscribe((Response) => {
      this.RecordDtls = Response;
      var lRow = document.querySelectorAll(".yearRowBtns");
      lRow.forEach(function(){

      });
      this.SpinnerService.hide();
  });
  };
  getlaunchYearRecs(event: any){
    event.target.classList.toggle('active');
    if(event.target.classList.contains('active')){
      this.launch_year = event.target.textContent;
    }else{
      this.launch_year = '';
    }

    
    this.getSpecificProgDtls();
  };
  getLaunchFlagRecs(event: any){
    event.target.classList.toggle('active');
    if(event.target.classList.contains('active')){ 
      this.launch_success = (event.target.textContent).toLowerCase();
    
    }else{
      this.launch_success = '';
    }
   this.getSpecificProgDtls();
  }
  getLandingFlagRecs(event: any){
    event.target.classList.toggle('active');
    if(event.target.classList.contains('active')){
      this.landing_success = (event.target.textContent).toLowerCase();
    }else{
      this.landing_success = '';
    }
    
    this.getSpecificProgDtls();
  }
  constructor(private service:LaunchServicesService,private location: Location, private route: ActivatedRoute,private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.route.queryParamMap.subscribe((params) => {
      this.orderObj= params.keys.map(key => {
       return {
        key:key,
        value: params.get(key) 
       }
    });    
  });
  //this.getLaunchProg();
  if(this.orderObj.length > 0){
	  this.launch_year = '';
	  this.launch_success = '';
	  this.landing_success = '';
    this.orderObj.filter(obj =>{
      if(obj.key == "launch_year"){
        this.launch_year = obj.value
      }else if(obj.key == "launch_success"){
        this.launch_success = obj.value
      }else if(obj.key == "land_success"){
          this.landing_success = obj.value          
      }
    }); 
    this.getSpecificProgDtls();
  }else{
    this.getLaunchProg();
  }
}
}
