import { Component } from "@angular/core";
import { LayoutBuilder, LayoutBuilderStyleRendererComponent } from "@org/layout-builder";

@Component({
    imports: [LayoutBuilderStyleRendererComponent],
    selector: "app-root",
    templateUrl: "./app.html",
    styleUrl: "./app.scss",
})
export class App extends LayoutBuilder { }
