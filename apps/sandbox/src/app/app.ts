import { Component } from "@angular/core";
import { LayoutBuilder, LayoutBuilderStyleResolverComponent } from "@org/layout-builder";

@Component({
    imports: [LayoutBuilderStyleResolverComponent],
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrl: "./app.scss",
})
export class App extends LayoutBuilder { }
