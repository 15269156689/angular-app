var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Administrator on 2016/10/18.
 */
var core_1 = require('@angular/core');
var user_data_mock_1 = require('../mock/user-data.mock');
var logger_service_1 = require('./logger.service');
var UserService2 = (function () {
    function UserService2(logger, isAuthorized) {
        this.logger = logger;
        this.isAuthorized = isAuthorized;
    }
    UserService2.prototype.getUser = function () {
        if (this.isAuthorized) {
            this.logger.log(" get users");
            return user_data_mock_1.Users;
        }
        else {
            this.logger.log(" not isAuthorized");
            return [];
        }
    };
    UserService2 = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [logger_service_1.Logger, Boolean])
    ], UserService2);
    return UserService2;
})();
exports.UserService2 = UserService2;
//# sourceMappingURL=user-service2.js.map