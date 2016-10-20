/**
 * Created by Administrator on 2016/10/18.
 */
import {Injectable } from '@angular/core';

@Injectable()
export class Authorize{
    isAuthorized:boolean;
    constructor(){
        this.isAuthorized=Math.random()>0.5?true:false;
    }
    getAuthorized(){
        return this.isAuthorized;
    }
}