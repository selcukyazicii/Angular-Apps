import { AboutComponent } from './app/components/about/about.component'
import { ContactComponent } from './app/components/contact/contact.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './app/components/header/header.component';
import { HomeComponent } from './app/components/home/home.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path:'header',component:HeaderComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModules { }