import { Component, output } from "@angular/core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NgClass } from "@angular/common";

import { IMenuItem } from "../../navigation.builder.model";
import { NavigationBuilderDisplay } from "../navigation.builder.display";

@Component({
    selector: "lib-navigation-builder-display-expand",
    templateUrl: "./navigation.builder.display.expand.html",
    imports: [NgClass, FaIconComponent]
})
export class NavigationBuilderDisplayExpand extends NavigationBuilderDisplay {
    public readonly expanded = output<IMenuItem>();

    public expandIcon = faAngleRight;
}
