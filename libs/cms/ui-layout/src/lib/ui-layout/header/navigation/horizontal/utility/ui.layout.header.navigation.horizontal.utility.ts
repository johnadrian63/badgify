import { Component } from "@angular/core";
import { NavigationBuilderHorizontal, NavigationBuilderHorizontalService } from "@org/navigation-builder";

import { UiLayoutHeaderNavigationHorizontalUtilityService } from "./ui.layout.header.navigation.horizontal.utility.service";

@Component({
    selector: "lib-ui-layout-header-navigation-horizontal-utility",
    templateUrl: "./ui.layout.header.navigation.horizontal.utility.html",
    imports: [NavigationBuilderHorizontal],
    providers: [
        {
            provide: NavigationBuilderHorizontalService,
            useExisting: UiLayoutHeaderNavigationHorizontalUtilityService
        }
    ]
})
export class UiLayoutHeaderNavigationHorizontalUtility { }