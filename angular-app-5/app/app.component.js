var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by Administrator on 2016/10/18.
 */
var core_1 = require('@angular/core');
var user_service_1 = require('./services/user.service');
var user_service2_1 = require('./services/user-service2');
var logger_service_1 = require("./services/logger.service");
var BetterLogger_1 = require("./services/BetterLogger");
var LoggerHelper_1 = require("./services/LoggerHelper");
var logger_value_1 = require("./values/logger.value");
var authorize_1 = require("./services/authorize");
var app_config_1 = require("./config/app-config");
var UserService2Provider = function (logger, authorize) {
    return new user_service2_1.UserService2(logger, authorize.getAuthorized());
};
var APP_CONFIG = new core_1.OpaqueToken('./config/app-config');
var AppComponent = (function () {
    function AppComponent(userService, userService2, appconfig) {
        this.userService = userService;
        this.userService2 = userService2;
        console.log("....");
        this.users = userService.getUser();
        console.log(userService2.getUser());
        console.log(appconfig);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/app.html',
            providers: [
                { provide: user_service_1.UserService, useClass: user_service_1.UserService },
                [LoggerHelper_1.LoggerHelper, { provide: BetterLogger_1.BetterLogger, useClass: BetterLogger_1.BetterLogger }],
                /*[LoggerHelper,{provide:Logger,useExisting:BetterLogger}],*/
                { provide: logger_service_1.Logger, useValue: logger_value_1.loggerValue },
                { provide: APP_CONFIG, useValue: app_config_1.AppConf },
                authorize_1.Authorize,
                {
                    provide: user_service2_1.UserService2,
                    useFactory: UserService2Provider,
                    deps: [logger_service_1.Logger, authorize_1.Authorize]
                }
            ]
        }),
        __param(2, core_1.Inject(APP_CONFIG)), 
        __metadata('design:paramtypes', [user_service_1.UserService, user_service2_1.UserService2, Object])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map