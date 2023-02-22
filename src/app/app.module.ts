import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopperComponent } from './developper/developper.component';
import { SkillsComponent } from './skills/skills.component';
import { CreateOnomatopeiaComponent } from './createOnomatopeia/createOnomatopeia.component';

@NgModule({
  declarations: [				
    AppComponent,
      DevelopperComponent,
      SkillsComponent,
      CreateOnomatopeiaComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
