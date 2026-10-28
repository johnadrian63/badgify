import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { LayoutStyleAbstractComponent } from "../layout.style.abstract.component";

@Component({
    selector: "lib-layout-style-without-sidebar-component",
    templateUrl: "./layout.style.without.sidebar.component.html",
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class LayoutStyleWithoutSidebarComponent extends LayoutStyleAbstractComponent { }
