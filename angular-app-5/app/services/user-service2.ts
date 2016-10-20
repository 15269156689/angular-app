/**
 * Created by Administrator on 2016/10/18.
 */
import {Injectable} from '@angular/core';
import{Users} from '../mock/user-data.mock';
import{Logger} from './logger.service';

@Injectable()
export  class UserService2{
    isAuthorized:boolean;
    constructor(private logger:Logger,isAuthorized:boolean){
        this.isAuthorized=isAuthorized;
    }

    getUser(){
        if(this.isAuthorized){
            this.logger.log(" get users");
            return Users;
        }else{
            this.logger.log(" not isAuthorized");
            return [];
        }
    }
}