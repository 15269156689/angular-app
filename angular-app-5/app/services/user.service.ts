/**
 * Created by Administrator on 2016/10/18.
 */
import {Injectable,Optional} from '@angular/core';
import {Users} from '../mock/user-data.mock';
import {Logger } from './logger.service';
import {BetterLogger} from "./BetterLogger";

@Injectable()
export class UserService{
    constructor(private logService:Logger,@Optional() private betterLog:BetterLogger ){

    }
    getUser(){
        this.logService.log("get users");
        this.logService.hello();
        //this.logService.log("get users");
        if(this.betterLog){
            this.betterLog.log("optional");
        }
        return Users;
    }
}