import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NxWelcome } from "./nx-welcome";
import { FormEngine } from "@org/form-engine";

@Component({
    imports: [NxWelcome, RouterModule, FormEngine],
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrl: "./app.scss",
})
export class App {
    protected title = "client";
}
