import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutAbstract } from "@org/layout"

@Component({
    imports: [RouterModule],
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrl: "./app.scss",
})
export class App extends LayoutAbstract {
    protected title = "sandbox";
}
