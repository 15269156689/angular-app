/**
 * Created by Administrator on 2016/10/17.
 */
import {Component} from '@angular/core';
import {Hero} from './hero';

@Component({
    moduleId:module.id,
    selector:'hero-form',
    templateUrl:'hero-form.component.html'
})

export  class  HeroFormComponent{
    powers=['Really smart','super Flexible','super Hot','weather changer'];

    model=new Hero(18,'Dr IQ',this.powers[0],'chuck overstreet');

    submitted=false;

    onSubmit(){this.submitted=true;}

    active=true;
    addHero(){
        this.model=new Hero(42,'','');
        this.active=false;
        setTimeout(()=>{this.active=true;},0);
    }
    /*
    //属性
    get diagnosic(){
        return JSON.stringify(this.model);
    }
    */
}