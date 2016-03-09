/**
 * Created by sumanth on 8/3/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var core_2 = require("angular2/core");
var template = require('./login.html');
var LoginComponent = (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    LoginComponent.prototype.submitInfo = function (a, b) {
        var _this = this;
        var url = 'http://localhost:8000/api/auth?email=' + a + '&password=' + b;
        console.log(url);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var creds = "email=" + a + "&password=" + b;
        this.http.post(url, creds, {
            headers: headers
        })
            .subscribe(function (data) {
            localStorage.setItem('jwt', data.json().token);
            _this.router.parent.navigateByUrl("/home");
        }, function (err) { return console.log(err); });
    };
    ;
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form'
        }),
        core_2.View({
            template: template
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map