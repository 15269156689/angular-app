var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Hero_1 = require('./Hero');
var AppComponent = (function () {
    function AppComponent() {
        this.heroes = [
            new Hero_1.Hero(1, "刘备"),
            new Hero_1.Hero(2, "孙权"),
            new Hero_1.Hero(3, "曹操"),
            new Hero_1.Hero(4, "司马懿")
        ];
        this.title = "英雄联盟";
        this.myHero = this.heroes[1];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>{{title}}</h1>' +
                '<h2>我最喜爱的英雄:{{myHero.name}}</h2>' +
                '<p>英雄列表</p>' +
                '<ul>' +
                '<li *ngFor="let hero of heroes">{{hero.name}}</li>' +
                '</ul>' +
                '<p *ngIf="heroes.length>3">有好多英雄啊</p>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map