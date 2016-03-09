var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "IG_CLONE_MARK_1";
        this.hero = "sumanthio";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app"
        }),
        core_1.View({
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n    <h2>Hello</h2><div class=\"container\">\n    <nav>\n\n    </nav>\n    <router-outlet></router-outlet>\n    </div>\n    ",
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: ['Login'] },
            { path: '/home', component: home_component_1.HomeComponent },
            { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map