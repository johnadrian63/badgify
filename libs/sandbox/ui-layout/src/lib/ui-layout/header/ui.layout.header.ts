import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { UiLayoutHeaderNavigationMain } from "./navigation/ui.layout.header.navigation.main";

@Component({
    selector: "lib-layout-header",
    templateUrl: "./ui.layout.header.html",
    styleUrl: "./ui.layout.header.css",
    imports: [
        RouterModule,
        FaIconComponent,
        UiLayoutHeaderNavigationMain
    ],
})
export class UiLayoutHeader {
    public readonly faUser = faUser;
}
