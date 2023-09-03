import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '' , component : DashboardComponent , children : [
    {path : 'about' , component : AboutComponent},
    {path : 'home' , component : HomeComponent},
    {path : 'contact' , component : ContactComponent},
    {path : 'about' , component : AboutComponent},
    {path : '' , redirectTo : '/admin/home' , pathMatch : 'full'}

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
