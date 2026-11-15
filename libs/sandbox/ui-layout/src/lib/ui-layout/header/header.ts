import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "lib-header",
    templateUrl: "./header.html",
    styleUrl: "./header.css",
    imports: [
        RouterModule,
        FaIconComponent
    ],
})
export class Header {
    public readonly faUser = faUser;
}
