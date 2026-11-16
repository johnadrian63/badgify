import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { LayoutBuilderSection } from "../layout.builder.section";
import { LayoutBuilderStyleAbstractComponent } from "../layout.builder.style.abstract.component";

@Component({
    selector: "lib-layout-builder-style-without-sidebar-component",
    templateUrl: "./layout.builder.style.without.sidebar.component.html",
    styleUrl: "./layout.builder.style.without.sidebar.component.css",
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class LayoutBuilderStyleWithoutSidebarComponent extends LayoutBuilderStyleAbstractComponent {
    public readonly layoutBuilderSection = LayoutBuilderSection;
}
