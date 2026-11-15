import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { HeaderNavigationMain } from "./navigation/header.navigation.main";

@Component({
    selector: "lib-header",
    templateUrl: "./header.html",
    styleUrl: "./header.css",
    imports: [
        RouterModule,
        FaIconComponent,
        HeaderNavigationMain
    ],
})
export class Header {
    public readonly faUser = faUser;
}
