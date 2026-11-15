import { NgClass } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { Component, Input } from "@angular/core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { NavigationBuilderDisplay } from "../navigation.builder.display";
import { NavigationBuilderDisplayMenuDropdownItem } from "./item/navigation.builder.display.menu.dropdown.item";

@Component({
    selector: "lib-navigation-builder-display-menu-dropdown",
    templateUrl: "./navigation.builder.display.menu.dropdown.html",
    imports: [
        NgClass,
        MatMenuModule,
        NavigationBuilderDisplayMenuDropdownItem,
        FaIconComponent
    ]
})
export class NavigationBuilderDisplayMenuDropdown extends NavigationBuilderDisplay {
    @Input() public override classes: string = "";

    public readonly expandIcon = faAngleDown;
}
