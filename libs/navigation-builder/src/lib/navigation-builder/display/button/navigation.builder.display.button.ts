import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { NavigationBuilderDisplay } from "../navigation.builder.display";

@Component({
    selector: "lib-navigation-builder-display-button",
    templateUrl: "./navigation.builder.display.button.html",
    imports: [RouterLink, NgClass]
})
export class NavigationBuilderDisplayButton extends NavigationBuilderDisplay {
    public readonly faAngleRightIcon = faAngleRight;
}
