/**
 * Created by sumanth on 8/3/16.
 */
import {bootstrap} from "angular2/bootstrap";
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
