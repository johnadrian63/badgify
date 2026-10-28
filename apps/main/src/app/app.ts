import { Component, OnInit } from "@angular/core";
import { testLib1 } from "@org/test-lib1";

import { RouterModule } from "@angular/router";
import { NxWelcome } from "./nx-welcome";

@Component({
    imports: [NxWelcome, RouterModule],
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrl: "./app.scss",
})
export class App implements OnInit {
    protected title = "client";

    public ngOnInit(): void {
        console.log(testLib1());
    }
}
