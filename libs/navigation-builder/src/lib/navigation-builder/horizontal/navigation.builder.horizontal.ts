import { Component, inject, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { NgClass } from "@angular/common";

import { IMenuItem } from "../navigation.builder.model";
import { NavigationBuilderHorizontalService } from "./navigation.builder.horizontal.service";
import { NavigationBuilderHorizontalResolver } from "./resolver/navigation.builder.horizontal.resolver";
import { NavigationBuilderHorizontalResolverService } from "./navigation.builder.horizontal.resolver.service";
import { NavigationBuilderHorizontalBaseResolverService } from "./resolver/navigation.builder.horizontal.base.resolver.service";

@Component({
    selector: "lib-navigation-builder-horizontal",
    styleUrl: "./navigation.builder.horizontal.css",
    templateUrl: "./navigation.builder.horizontal.html",
    imports: [
        MatButtonModule,
        MatMenuModule,
        NavigationBuilderHorizontalResolver,
        NgClass,
    ],
    providers: [
        NavigationBuilderHorizontalResolverService,
        {
            provide: NavigationBuilderHorizontalBaseResolverService,
            useExisting: NavigationBuilderHorizontalResolverService,
        }
    ],
})
export class NavigationBuilderHorizontal {
    public get menus(): IMenuItem[] {
        return this.navigationBuilderHorizontalService.menus();
    }

    public readonly navigationBuilderHorizontalService: NavigationBuilderHorizontalService = inject<NavigationBuilderHorizontalService>(NavigationBuilderHorizontalService);
    public readonly classes = input<string>("");

}
