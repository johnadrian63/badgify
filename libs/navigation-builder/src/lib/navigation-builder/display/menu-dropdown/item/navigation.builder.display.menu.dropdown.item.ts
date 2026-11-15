import { MatMenu, MatMenuModule } from "@angular/material/menu";
import { Component, Input, model, viewChild } from "@angular/core";

import { IMenuItem } from "../../../navigation.builder.model";

@Component({
    selector: "lib-navigation-builder-display-menu-dropdown-item",
    templateUrl: "./navigation.builder.display.menu.dropdown.item.html",
    imports: [MatMenuModule]
})
export class NavigationBuilderDisplayMenuDropdownItem {
    @Input() public classes: string = "";

    public readonly menu = model.required<IMenuItem>();
    public readonly menuItem = viewChild<MatMenu>("menuItem");
}
