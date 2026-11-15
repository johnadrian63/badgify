import { IMenuItem } from "../navigation.builder.model";
import { INavigationBuilderMenuResolverVisitor } from "../navigation.builder.menu.resolver.visitor";
import { NavigationBuilderDisplayExpandHandler, NavigationBuilderDisplayHandler, NavigationBuilderDisplayLinkHandler } from "../navigation.display.handler";

export class NavigationBuilderVerticalResolverVisitor implements INavigationBuilderMenuResolverVisitor<NavigationBuilderDisplayHandler> {
    constructor(
        private readonly menu: IMenuItem
    ) { }

    public visitNested(): NavigationBuilderDisplayHandler {
        // const componentRef = renderer.vcr.createComponent(NavigationBuilderDisplayExpand);

        // componentRef.instance.menu.set(renderer.item);
        // componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        // componentRef.instance
        //     .onExpand
        //     .subscribe((data: IMenuItem) => {
        //         this.navigationVerticalService.setMenu(data);
        //     });

        // componentRef.changeDetectorRef.detectChanges();
        return new NavigationBuilderDisplayExpandHandler(this.menu);
    }

    public visitSingle(): NavigationBuilderDisplayHandler {
        // const componentRef = renderer.vcr.createComponent(NavigationBuilderDisplayLink);

        // componentRef.instance.menu.set(renderer.item);
        // componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        // componentRef.changeDetectorRef.detectChanges();
        return new NavigationBuilderDisplayLinkHandler(this.menu);
    }

    public visitSubNested(): NavigationBuilderDisplayHandler {
        throw new Error("visitSubNested method not implemented.");
    }

    public visitSubSingle(): NavigationBuilderDisplayHandler {
        throw new Error("visitSubSingle method not implemented.");
    }

    public visitCustom(): NavigationBuilderDisplayHandler {
        return new this.menu.handler!(this.menu);
    }
}