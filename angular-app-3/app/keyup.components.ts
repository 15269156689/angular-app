/**
 * Created by Administrator on 2016/10/13.
 */
import { Component } from '@angular/core';

@Component({
    selector:'key-up1',
    template:'<input (keyup)="onKeyUp($event)">' +
    '<p>{{values}}</p>'
})

export  class  KeyUpComponent_v1{
    values='';

    /*
    onKeyUp(evt:any){
        this.values+=evt.target.value+"|";
    }
    */

    onKeyUp(evt:KeyboardEvent){
        this.values+=(<HTMLInputElement>event.target).value+"!";
    }
}


@Component({
    selector:'key-up2',
    template:'<input #box (keyup)="onKey(box.value)">' +
    '<p>{{values}}</p>'
})

export class KeyUpComponent_v2{
    values='';
    onKey(value){
        this.values+=value+"|";
    }
}


@Component({
    selector:'key-up3',
    template:'<input #box (keyup.enter)="values=box.value">' +
    '<p>{{values}}</p>'
})

export  class KeyUpComponent_v3{
    values="";
}


@Component({
    selector:'key-up4',
    template:
    '<input #box (keyup.enter)="this.values=box.value" (blur)="this.values=box.value">' +
    '<p>{{values}}</p>'
})

export  class  KeyUpComponent_v4{
    values="";
}