import { Component, effect, inject, input, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../navigation.builder.model";
import { NavigationBuilderVerticalService } from "./navigation.builder.vertical.service";
import { NavigationBuilderVerticalResolverVisitor } from "./navigation.builder.vertical.resolver.visitor";
import { NavigationBuilderMenuResolver, NavigationBuilderMenuNested, NavigationBuilderMenuSingle } from "../navigation.builder.menu.resolver.visitor";

@Component({
    selector: "lib-navigation-builder-vertical-menu-resolver",
    template: ""
})
export class NavigationBuilderVerticalResolver {
    public readonly menu = input.required<IMenuItem>();

    private readonly vcr = inject<ViewContainerRef>(ViewContainerRef);
    private readonly verticalMenuService = inject<NavigationBuilderVerticalService>(NavigationBuilderVerticalService);

    constructor() {
        effect(() => {
            const menu = this.menu();

            let resolver: NavigationBuilderMenuResolver;

            if (menu.children?.length) {
                resolver = new NavigationBuilderMenuNested();
            } else {
                resolver = new NavigationBuilderMenuSingle();
            }

            const visitor = new NavigationBuilderVerticalResolverVisitor(menu);

            const handler = resolver.accept(visitor);

            this.verticalMenuService.handle(this.vcr, handler);
        });
    }
}
