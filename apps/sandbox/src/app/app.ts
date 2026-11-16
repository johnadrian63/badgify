import { Component } from "@angular/core";
import { LayoutBuilder, LayoutBuilderStyleRendererComponent } from "@org/layout-builder";

@Component({
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrl: "./app.css",
    imports: [LayoutBuilderStyleRendererComponent],
})
export class App extends LayoutBuilder { }
