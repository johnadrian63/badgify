
import { IMenuItem } from "../navigation.builder.model";
import { INavigationBuilderMenuResolverVisitor } from "../navigation.builder.menu.resolver.visitor";
import { NavigationBuilderHorizontalDropdownDisplayHandler } from "./navigation.builder.horizontal.display.handler";
import { NavigationBuilderDisplayExpandHandler, NavigationBuilderDisplayHandler, NavigationBuilderDisplayLinkHandler } from "../navigation.display.handler";

export class NavigationBuilderHorizontalResolverVisitor implements INavigationBuilderMenuResolverVisitor<NavigationBuilderDisplayHandler> {
    constructor(private readonly menu: IMenuItem) { }

    public visitNested(): NavigationBuilderDisplayHandler {
        return new NavigationBuilderHorizontalDropdownDisplayHandler(this.menu);
    }

    public visitSingle(): NavigationBuilderDisplayHandler {
        return new NavigationBuilderDisplayLinkHandler(this.menu);
    }

    public visitSubNested(): NavigationBuilderDisplayHandler {
        return new NavigationBuilderDisplayExpandHandler(this.menu);
    }

    public visitSubSingle(): NavigationBuilderDisplayHandler {
        return new NavigationBuilderDisplayLinkHandler(this.menu);
    }

    public visitCustom(): NavigationBuilderDisplayHandler {
        return new this.menu.handler!(this.menu);
    }
}
