import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchProgramDtlsComponent } from './launch-program-dtls/launch-program-dtls.component';
import { LaunchServicesService } from './launch-services.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { LaunchSummaryComponent } from './launch-summary/launch-summary.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LaunchProgramDtlsComponent,
    LaunchSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [LaunchServicesService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
