import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutBuilder, LayoutStyleResolverComponent } from "@org/layout-builder";

@Component({
    imports: [
        RouterModule,
        LayoutStyleResolverComponent
    ],
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrl: "./app.scss",
})
export class App extends LayoutBuilder {
    protected title = "sandbox";
}
