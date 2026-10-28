import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";

import { LayoutStyleAbstractComponent } from "../layout.style.abstract.component";

@Component({
    selector: "lib-layout-style-responsive-component",
    templateUrl: "./layout.style.responsive.component.html",
    styleUrl: "./layout.style.responsive.component.scss",
    imports: [
        CommonModule,
        RouterModule,
        MatMenuModule
    ]
})
export class LayoutStyleResponsiveComponent extends LayoutStyleAbstractComponent {
    public loggedin: boolean = true;
    public toggleNavigate: boolean = false;
}
