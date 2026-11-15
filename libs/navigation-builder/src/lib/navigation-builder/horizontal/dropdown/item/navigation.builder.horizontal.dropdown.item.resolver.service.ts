import { Injectable, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../../navigation.builder.model";
import { NavigationBuilderHorizontalResolverVisitor } from "../../navigation.builder.horizontal.resolver.visitor";
import { NavigationBuilderHorizontalBaseResolverService } from "../../resolver/navigation.builder.horizontal.base.resolver.service";
import { NavigationBuilderMenuResolver, NavigationBuilderMenuCustom, NavigationBuilderMenuSubNested, NavigationBuilderMenuSubSingle } from "../../../navigation.builder.menu.resolver.visitor";

@Injectable()
export class NavigationBuilderHorizontalDropdownItemResolverService extends NavigationBuilderHorizontalBaseResolverService {
    public override handle(vcr: ViewContainerRef, menu: IMenuItem): void {
        let resolver: NavigationBuilderMenuResolver;

        if (menu.handler) {
            resolver = new NavigationBuilderMenuCustom();
        } else {
            if (menu.children?.length) {
                resolver = new NavigationBuilderMenuSubNested();
            } else {
                resolver = new NavigationBuilderMenuSubSingle();
            }
        }

        const handler = resolver.accept(new NavigationBuilderHorizontalResolverVisitor(menu));

        this.navigationBuilderHorizontalService.handle(vcr, handler);
    }
}
