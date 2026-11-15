import { Component } from "@angular/core";
import { LayoutBuilder, LayoutBuilderStyleResolverComponent } from "@org/layout-builder";

@Component({
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrl: "./app.css",
    imports: [LayoutBuilderStyleResolverComponent],
})
export class App extends LayoutBuilder { }
