import { Component, Input, model, viewChild } from "@angular/core";
import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from "@angular/cdk/menu";
import { NgClass } from "@angular/common";
import { PortalModule } from "@angular/cdk/portal";

import { IMenuItem } from "../../../navigation.builder.model";
import { NavigationBuilderHorizontalResolver } from "../../resolver/navigation.builder.horizontal.resolver";
import { NavigationBuilderHorizontalBaseResolverService } from "../../resolver/navigation.builder.horizontal.base.resolver.service";
import { NavigationBuilderHorizontalDropdownItemResolverService } from "./navigation.builder.horizontal.dropdown.item.resolver.service";

@Component({
    selector: "lib-navigation-builder-horizontal-dropdown-item",
    styleUrl: "./navigation.builder.horizontal.dropdown.item.css",
    templateUrl: "./navigation.builder.horizontal.dropdown.item.html",
    imports: [
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
        NgClass,
        PortalModule,
        NavigationBuilderHorizontalResolver
    ],
    providers: [
        NavigationBuilderHorizontalDropdownItemResolverService,
        {
            provide: NavigationBuilderHorizontalBaseResolverService,
            useExisting: NavigationBuilderHorizontalDropdownItemResolverService
        }
    ],
})
export class NavigationBuilderHorizontalDropdownItem {
    @Input() public classes: string = "";
    @Input() public menuClass: string = "";

    public readonly menu = model.required<IMenuItem>();
    public readonly menuItem = viewChild<CdkMenu>("menuItem");
}
