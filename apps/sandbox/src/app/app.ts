import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutBuilder, LayoutBuilderStyleResolverComponent } from "@org/layout-builder";

@Component({
    imports: [RouterModule, LayoutBuilderStyleResolverComponent],
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrl: "./app.scss",
})
export class App extends LayoutBuilder { }
