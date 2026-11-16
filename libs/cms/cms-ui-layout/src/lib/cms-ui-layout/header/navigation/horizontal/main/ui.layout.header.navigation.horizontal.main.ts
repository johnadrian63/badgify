import { Component } from "@angular/core";
import { NavigationBuilderHorizontal, NavigationBuilderHorizontalService } from "@org/navigation-builder";

import { UiLayoutHeaderNavigationHorizontalMainService } from "./ui.layout.header.navigation.horizontal.main.service";

@Component({
    selector: "lib-ui-layout-header-navigation-horizontal-main",
    templateUrl: "./ui.layout.header.navigation.horizontal.main.html",
    imports: [NavigationBuilderHorizontal],
    providers: [
        {
            provide: NavigationBuilderHorizontalService,
            useExisting: UiLayoutHeaderNavigationHorizontalMainService
        }
    ]
})
export class UiLayoutHeaderNavigationHorizontalMain { }