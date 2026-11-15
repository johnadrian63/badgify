import { Component, effect, inject, input, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../navigation.builder.model";
import { NavigationBuilderHorizontalBaseResolverService } from "./navigation.builder.horizontal.base.resolver.service";

@Component({
    selector: "lib-navigation-builder-horizontal-resolver",
    template: ""
})
export class NavigationBuilderHorizontalResolver {
    public readonly menu = input.required<IMenuItem>();
    public readonly resolverService: NavigationBuilderHorizontalBaseResolverService = inject<NavigationBuilderHorizontalBaseResolverService>(NavigationBuilderHorizontalBaseResolverService);

    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);

    constructor() {
        effect(() => {
            this.resolverService.handle(this.vcr, this.menu());
        });
    }
}
