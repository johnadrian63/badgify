import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderButtonDirective } from "@org/loader";

import { UiButtonAbstractComponent } from "./ui.button.abstract.component";

@Component({
    selector: "lib-ui-button",
    templateUrl: "./ui.button.component.html",
    styleUrl: "./ui.button.component.scss",
    imports: [
        CommonModule,
        LoaderButtonDirective
    ]
})
export class UiButtonComponent extends UiButtonAbstractComponent { }
