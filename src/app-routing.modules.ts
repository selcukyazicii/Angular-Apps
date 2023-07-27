import { AboutComponent } from './app/components/about/about.component'
import { ContactComponent } from './app/components/contact/contact.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // Diğer rotaları burada tanımlayabilirsiniz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModules { }