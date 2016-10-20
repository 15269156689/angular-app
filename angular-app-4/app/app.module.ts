import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HeroFormComponent } from './hero-form.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations:[HeroFormComponent],
    bootstrap:[HeroFormComponent]
})
export class AppModule { }
