/// <reference path="../../typings/globals/node/index.d.ts" />
import {Component, OnInit} from "angular2/core";

var app = require("../../app");

@Component({
    selector: "app",
    template: " <h1>Msg from app component: This was easy</h1>"
})

export class AppComponent {

    constructor() {
        console.log("Testing require " + app.bucket);
    }
   
}