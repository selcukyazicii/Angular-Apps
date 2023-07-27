import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModules } from 'src/app-routing.modules';
import { HomeComponent } from './components/home/home.component';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModules,
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
