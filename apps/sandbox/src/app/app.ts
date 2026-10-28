import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutBuilder } from "@org/layout-builder";

@Component({
    imports: [RouterModule],
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrl: "./app.scss",
})
export class App extends LayoutBuilder {
    protected title = "sandbox";
}
