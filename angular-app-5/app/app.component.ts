/**
 * Created by Administrator on 2016/10/18.
 */
import {Component,OpaqueToken,Inject} from '@angular/core';

import {User} from './classes/User';
import {UserService} from './services/user.service';
import {UserService2} from './services/user-service2';

import {Logger } from "./services/logger.service";
import {BetterLogger} from "./services/BetterLogger";
import {LoggerHelper} from "./services/LoggerHelper";
import {loggerValue} from "./values/logger.value";
import {Authorize} from "./services/authorize";
import {AppConf} from "./config/app-config";
import {AppConfig} from "./config/app-config";


let UserService2Provider=(logger:Logger,authorize:Authorize)=>{
    return new UserService2(logger,authorize.getAuthorized());
}

let APP_CONFIG=new OpaqueToken('./config/app-config');


@Component({
    selector:'my-app',
    templateUrl:'app/templates/app.html',
    providers:[
        {provide:UserService,useClass:UserService},
        [LoggerHelper,{provide:BetterLogger,useClass:BetterLogger}],
        /*[LoggerHelper,{provide:Logger,useExisting:BetterLogger}],*/
        {provide:Logger,useValue:loggerValue},
        {provide:APP_CONFIG,useValue:AppConf},
        Authorize,
        {
            provide:UserService2,
            useFactory:UserService2Provider,
            deps:[Logger,Authorize]
        }
    ]
})

export  class AppComponent{
    users:User[];
    constructor(private userService:UserService,private userService2:UserService2,@Inject(APP_CONFIG)appconfig:AppConfig){
        console.log("....");
        this.users=userService.getUser();
        console.log(userService2.getUser());
        console.log(appconfig);
    }
}