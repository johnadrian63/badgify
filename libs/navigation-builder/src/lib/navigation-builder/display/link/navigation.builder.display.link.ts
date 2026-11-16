import { NgClass } from "@angular/common";
import { Component, model } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { IMenuItemTarget } from "../../navigation.builder.model";
import { NavigationBuilderDisplay } from "../navigation.builder.display";

@Component({
    selector: "lib-navigation-builder-display-link",
    templateUrl: "./navigation.builder.display.link.html",
    imports: [RouterLink, RouterLinkActive, NgClass, FaIconComponent]
})
export class NavigationBuilderDisplayLink extends NavigationBuilderDisplay {
    public iconRight: IconDefinition | null = null;
    public iconLeft: IconDefinition | null = null;

    public readonly target = model<IMenuItemTarget>("_self");
}
