/**
 * Created by Administrator on 2016/10/18.
 */
import {Injectable} from '@angular/core';
import {LoggerHelper} from "./LoggerHelper";

@Injectable()
export  class BetterLogger{
    logs:string[]=[];
    constructor(private logHelper:LoggerHelper){
        console.warn('BetterLogger Constructor');
    }
    log(msg){
        this.logs.push(msg);
        console.warn(" from better logger class： "+msg);
    }
}