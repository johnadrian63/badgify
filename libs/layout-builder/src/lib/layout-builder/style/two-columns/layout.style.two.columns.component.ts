import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { UiBackdropComponent } from "@org/ui";
import { LayoutStyleWithSidebarComponent } from "../with-sidebar/layout.style.with.sidebar.component";

@Component({
    selector: "lib-layout-style-two-columns-component",
    templateUrl: "./layout.style.two.columns.component.html",
    styleUrl: "./layout.style.two.columns.component.scss",
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        UiBackdropComponent
    ]
})
export class LayoutStyleTwoColumnsComponent extends LayoutStyleWithSidebarComponent { }
