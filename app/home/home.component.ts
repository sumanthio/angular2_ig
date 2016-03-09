/**
 * Created by sumanth on 8/3/16.
 */

import {Component} from "angular2/core";
import {View} from "angular2/core";

@Component({
    selector: "home"
})
@View({
    template:"<nav></nav><section class='well'>Home Sweet Home</section>"
})

export class HomeComponent{
    constructor(){};

};