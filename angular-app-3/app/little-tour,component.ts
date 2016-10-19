/**
 * Created by Administrator on 2016/10/17.
 */
import {Component} from '@angular/core';

@Component({
    selector:'little-tour',
    template:`
        <input #newHero (keyup.enter)="addHero(newHero.value)" (blur)="addHero(newHero.value);newHero.value='' ">
        <button (click)="addHero(newHero.value)">增加</button>
        <ul>
            <li *ngFor="let hero of heros">{{hero}}</li>
        </ul>
    `
})

export  class  LittleTourComponent{
    heros=["刘备","张飞"];
    addHero(val:string){
        if(val){
            this.heros.push(val);
        }
    }
}