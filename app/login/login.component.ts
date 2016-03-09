/**
 * Created by sumanth on 8/3/16.
 */

import {Component} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';
import {View} from "angular2/core";

let template = require('./login.html');
@Component({
    selector: 'login-form'
})

@View({
    template: template
})


export class LoginComponent{
    constructor(public http: Http, public router: Router){}

    submitInfo(a, b){
        let url = 'http://localhost:8000/api/auth?email='+a+'&password='+b;
        console.log(url);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        var creds = "email=" + a + "&password=" + b;

        this.http.post(url, creds, {
                headers: headers
            })
            .subscribe(
                data => {
                    localStorage.setItem('jwt', data.json().token);
                    this.router.parent.navigateByUrl("/home");
                },
                err => console.log(err)

            );
    };

}
