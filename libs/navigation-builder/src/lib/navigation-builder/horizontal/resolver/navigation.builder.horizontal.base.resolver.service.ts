import { inject, Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { IMenuItem } from "../../navigation.builder.model";
import { NavigationBuilderHorizontalService } from "../navigation.builder.horizontal.service";
import { NavigationBuilderHorizontalResolverVisitor } from "../navigation.builder.horizontal.resolver.visitor";
import { NavigationBuilderMenuResolver, NavigationBuilderMenuCustom, NavigationBuilderMenuNested, NavigationBuilderMenuSingle } from "../../navigation.builder.menu.resolver.visitor";

@Injectable()
export abstract class NavigationBuilderHorizontalBaseResolverService {
    public readonly menus: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    protected readonly navigationBuilderHorizontalService: NavigationBuilderHorizontalService = inject<NavigationBuilderHorizontalService>(NavigationBuilderHorizontalService);

    public handle(vcr: ViewContainerRef, item: IMenuItem): void {
        let resolver: NavigationBuilderMenuResolver;

        if (item.handler) {
            resolver = new NavigationBuilderMenuCustom();
        } else {
            if (item.children?.length) {
                resolver = new NavigationBuilderMenuNested();
            } else {
                resolver = new NavigationBuilderMenuSingle();
            }
        }

        const handler = resolver.accept(new NavigationBuilderHorizontalResolverVisitor(item));

        this.navigationBuilderHorizontalService.handle(vcr, handler);
    }
}
