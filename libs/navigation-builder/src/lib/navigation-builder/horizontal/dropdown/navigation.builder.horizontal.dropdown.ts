import { Component } from "@angular/core";
import { NgClass } from "@angular/common";
import { CdkMenuTrigger } from "@angular/cdk/menu";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { NavigationBuilderDisplay } from "../../display/navigation.builder.display";
import { NavigationBuilderHorizontalDropdownItem } from "./item/navigation.builder.horizontal.dropdown.item";

@Component({
    selector: "lib-navigation-builder-horizontal-dropdown",
    styleUrl: "./navigation.builder.horizontal.dropdown.css",
    templateUrl: "./navigation.builder.horizontal.dropdown.html",
    imports: [
        CdkMenuTrigger,
        NgClass,
        FaIconComponent,
        NavigationBuilderHorizontalDropdownItem,
    ],
})
export class NavigationBuilderHorizontalDropdown extends NavigationBuilderDisplay {
    public expandIcon = faAngleDown;

    public menuClass: string = "";
}
