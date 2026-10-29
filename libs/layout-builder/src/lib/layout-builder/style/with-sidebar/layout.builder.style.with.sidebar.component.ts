import {
    Component,
    OnInit
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { UiBackdropComponent } from "@org/ui";

import { LayoutBuilderStyleAbstractComponent } from "../layout.builder.style.abstract.component";

@Component({
    selector: "lib-layout-builder-style-with-sidebar-component",
    templateUrl: "./layout.builder.style.with.sidebar.component.html",
    styleUrl: "./layout.builder.style.with.sidebar.component.scss",
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        UiBackdropComponent
    ]
})
export class LayoutBuilderStyleWithSidebarComponent extends LayoutBuilderStyleAbstractComponent implements OnInit {

    public override ngOnInit(): void {
        super.ngOnInit();

        if (this.isMobileViewport) {
            const sidebarExpanded = this.data["sidebarExpanded"] !== undefined ? this.data["sidebarExpanded"] : false;

            this.layoutStyleContextService.sidebarExpand(sidebarExpanded);

            return;
        }

        const sidebarExpanded = this.data["sidebarExpanded"] !== undefined ? this.data["sidebarExpanded"] : true;

        this.layoutStyleContextService.sidebarExpand(sidebarExpanded);
    }
}
