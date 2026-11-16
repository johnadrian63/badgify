import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { CdkMenuTrigger } from "@angular/cdk/menu";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NavigationBuilderDisplay, NavigationBuilderHorizontalDropdownItem } from "@org/navigation-builder";

@Component({
    selector: "lib-ui-layout-header-navigation-horizontal-utility-display-profile",
    templateUrl: "./ui.layout.header.navigation.horizontal.utility.display.profile.html",
    imports: [
        CdkMenuTrigger,
        NgClass,
        FaIconComponent,
        NavigationBuilderHorizontalDropdownItem
    ]
})
export class UiLayoutHeaderNavigationHorizontalUtilityDisplayProfile extends NavigationBuilderDisplay {
    public readonly faIcon = faUser;

    public menuClass: string = "";
}
