import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { LayoutStyleAbstractComponent } from "../layout.style.abstract.component";

@Component({
    selector: "lib-layout-style-no-layout-component",
    templateUrl: "./layout.style.no.layout.component.html",
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class LayoutStyleNoLayoutComponent extends LayoutStyleAbstractComponent { }
