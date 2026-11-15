import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { NavigationBuilderDisplay } from "../navigation.builder.display";

@Component({
    selector: "lib-navigation-builder-display-text",
    templateUrl: "./navigation.builder.display.text.html",
    imports: [RouterLink, NgClass]
})
export class NavigationBuilderDisplayText extends NavigationBuilderDisplay {
    public readonly faAngleRightIcon = faAngleRight;
}
