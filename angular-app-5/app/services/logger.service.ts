/**
 * Created by Administrator on 2016/10/18.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class Logger{
    logs:string[]=[];
    log(msg){
        this.logs.push(msg);
        console.warn(' from logger class:'+msg);
    }
}