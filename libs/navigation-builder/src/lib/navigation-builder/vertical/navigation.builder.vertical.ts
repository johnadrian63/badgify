import { Component, computed, effect, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { IMenu } from "../navigation.builder.model";
import { NavigationBuilderVerticalService } from "./navigation.builder.vertical.service";
import { NavigationBuilderVerticalResolver } from "./navigation.builder.vertical.resolver";

@Component({
    selector: "lib-navigation-builder-vertical",
    styleUrl: "./navigation.builder.vertical.css",
    templateUrl: "./navigation.builder.vertical.html",
    imports: [FaIconComponent, NavigationBuilderVerticalResolver],
})
export class NavigationBuilderVertical {

    public get currentMenu(): IMenu {
        return this.navigationBuilderVerticalService.menu;
    }

    public get selectedMenus(): IMenu[] {
        return this.navigationBuilderVerticalService.selectedMenus;
    }

    public readonly faAngleLeftIcon = faAngleLeft;
    public readonly navigationBuilderVerticalService = inject<NavigationBuilderVerticalService>(NavigationBuilderVerticalService);
    public readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    public readonly isVisible = computed(() => this.navigationBuilderVerticalService.isVisible());

    constructor() {
        effect((onCleanup) => {
            const menuList = this.navigationBuilderVerticalService.menus();

            this.navigationBuilderVerticalService.setMenu({
                label: "",
                text: "",
                children: menuList
            });

            onCleanup(() => {
                this.navigationBuilderVerticalService.reset();
            });
        });
    }

    public back(): void {
        this.navigationBuilderVerticalService.back();
    }
}
