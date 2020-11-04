import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchSummaryComponent} from "./launch-summary/launch-summary.component"



const routes: Routes = [{
  path:'', component:LaunchSummaryComponent  
},
{ path: 'Year/:id', component:LaunchSummaryComponent  },
{ path: '', redirectTo: '', pathMatch: 'full' },
{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
