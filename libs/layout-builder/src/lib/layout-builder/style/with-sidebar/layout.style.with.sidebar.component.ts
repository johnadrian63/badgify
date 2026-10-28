import {
    Component,
    OnInit
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { UiBackdropComponent } from "@org/ui";

import { LayoutStyleAbstractComponent } from "../layout.style.abstract.component";

@Component({
    selector: "lib-layout-style-with-sidebar-component",
    templateUrl: "./layout.style.with.sidebar.component.html",
    styleUrl: "./layout.style.with.sidebar.component.scss",
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        UiBackdropComponent
    ]
})
export class LayoutStyleWithSidebarComponent extends LayoutStyleAbstractComponent implements OnInit {

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
