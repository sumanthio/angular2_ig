import {Component, View} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

@Component({
    selector: "my-app"
})

@View({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Hello</h2><div class="container">
    <nav>

    </nav>
    <router-outlet></router-outlet>
    </div>
    `,
})


@RouteConfig([
    { path: '/', redirectTo: ['Login'] },
    { path: '/home', component: HomeComponent},
    { path: '/login', name: 'Login', component: LoginComponent},
    //{ path: '/signup', component: Signup, as: 'Signup' }
])

export class AppComponent{
  constructor(){}
  public title = "IG_CLONE_MARK_1";
  public hero = "sumanthio";
}
