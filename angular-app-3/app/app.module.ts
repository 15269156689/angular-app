/**
 * Created by Administrator on 2016/10/13.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ClickMeComponent} from './client-me.component';
import {KeyUpComponent_v1,KeyUpComponent_v2,KeyUpComponent_v3,KeyUpComponent_v4} from './keyup.components';
import {LittleTourComponent} from './little-tour,component';
@NgModule({
    imports:[BrowserModule],
    declarations: [ ClickMeComponent ,KeyUpComponent_v1,KeyUpComponent_v2,KeyUpComponent_v3,KeyUpComponent_v4,LittleTourComponent],
    bootstrap:[ClickMeComponent,KeyUpComponent_v1,KeyUpComponent_v2,KeyUpComponent_v3,KeyUpComponent_v4,LittleTourComponent]
})

export class AppModule{}