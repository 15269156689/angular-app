import { Component } from '@angular/core';
import {Hero} from './Hero'
@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>' +
    '<h2>我最喜爱的英雄:{{myHero.name}}</h2>' +
    '<p>英雄列表</p>' +
    '<ul>' +
    '<li *ngFor="let hero of heroes">{{hero.name}}</li>'+
    '</ul>' +
    '<p *ngIf="heroes.length>3">有好多英雄啊</p>'
})
export class AppComponent {
   title:string;
    myHero:Hero;
    heroes:Hero[];
    constructor(){
        this.heroes=[
            new Hero(1,"刘备"),
            new Hero(2,"孙权"),
            new Hero(3,"曹操"),
            new Hero(4,"司马懿")
        ];
        this.title="英雄联盟";
        this.myHero=this.heroes[1];
    }

}
