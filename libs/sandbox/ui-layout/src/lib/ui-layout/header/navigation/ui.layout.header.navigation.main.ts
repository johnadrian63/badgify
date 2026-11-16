import { Component, inject, OnInit } from "@angular/core";
import { NavigationBuilderHorizontal, NavigationBuilderHorizontalService } from "@org/navigation-builder";

import { navigationData } from "./navigation.data";
import { UiLayoutHeaderNavigationHorizontalService } from "./ui.layout.header.navigation.horizontal.service";

@Component({
    selector: "lib-ui-layout-header-navigation-main",
    templateUrl: "./ui.layout.header.navigation.main.html",
    imports: [NavigationBuilderHorizontal],
    providers: [
        UiLayoutHeaderNavigationHorizontalService,
        {
            provide: NavigationBuilderHorizontalService,
            useExisting: UiLayoutHeaderNavigationHorizontalService
        }
    ]
})
export class UiLayoutHeaderNavigationMain implements OnInit {
    private readonly navigationHorizontalService: UiLayoutHeaderNavigationHorizontalService = inject<UiLayoutHeaderNavigationHorizontalService>(UiLayoutHeaderNavigationHorizontalService);

    public ngOnInit(): void {
        this.navigationHorizontalService.menus.set(navigationData);
    }
}