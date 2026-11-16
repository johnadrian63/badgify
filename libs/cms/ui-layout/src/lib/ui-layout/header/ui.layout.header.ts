import { Component, inject, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

import { navigationData } from "./navigation/navigation.data";
import { profileNavigationData } from "./navigation/profile.navigation.data";
import { UiLayoutHeaderNavigationHorizontalMain } from "./navigation/horizontal/main/ui.layout.header.navigation.horizontal.main";
import { UiLayoutHeaderNavigationHorizontalUtility } from "./navigation/horizontal/utility/ui.layout.header.navigation.horizontal.utility";
import { UiLayoutHeaderNavigationHorizontalMainService } from "./navigation/horizontal/main/ui.layout.header.navigation.horizontal.main.service";
import { UiLayoutHeaderNavigationHorizontalUtilityService } from "./navigation/horizontal/utility/ui.layout.header.navigation.horizontal.utility.service";

@Component({
    selector: "lib-layout-header",
    templateUrl: "./ui.layout.header.html",
    styleUrl: "./ui.layout.header.css",
    imports: [
        RouterLink,
        UiLayoutHeaderNavigationHorizontalMain,
        UiLayoutHeaderNavigationHorizontalUtility
    ],
    providers: [
        UiLayoutHeaderNavigationHorizontalMainService,
        UiLayoutHeaderNavigationHorizontalUtilityService
    ]
})
export class UiLayoutHeader implements OnInit {
    private readonly navigationHorizontalMainService: UiLayoutHeaderNavigationHorizontalMainService = inject<UiLayoutHeaderNavigationHorizontalMainService>(UiLayoutHeaderNavigationHorizontalMainService);
    private readonly navigationHorizontalUtilityService: UiLayoutHeaderNavigationHorizontalUtilityService = inject<UiLayoutHeaderNavigationHorizontalUtilityService>(UiLayoutHeaderNavigationHorizontalUtilityService);

    public ngOnInit(): void {
        this.navigationHorizontalMainService.menus.set(navigationData);

        this.navigationHorizontalUtilityService.menus.set(profileNavigationData);
    }
}
