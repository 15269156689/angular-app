/**
 * Created by Administrator on 2016/10/13.
 */
import {Component} from '@angular/core';

@Component({
    selector:'click-me',
    template:'<button (click)="onClickMe()">Click Me!</button>' +
    '{{ClickMeMessage}}'
})

export  class  ClickMeComponent{
    ClickMeMessage='';
    onClickMe(){
        this.ClickMeMessage="你是我的英雄!"
    }
}