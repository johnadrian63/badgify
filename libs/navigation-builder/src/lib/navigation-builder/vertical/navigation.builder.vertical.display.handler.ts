import { ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../navigation.builder.model";
import { NavigationBuilderVerticalService } from "./navigation.builder.vertical.service";
import { INavigationBuilderDisplayHandlerVisitor, NavigationBuilderDisplayButtonHandler, NavigationBuilderDisplayExpandHandler, NavigationBuilderDisplayLinkHandler, NavigationBuilderDisplayMenuDropdownHandler, NavigationBuilderDisplayTextHandler } from "../navigation.display.handler";

export class NavigationBuilderVerticalDisplayHandler implements INavigationBuilderDisplayHandlerVisitor<void> {
    constructor(
        private readonly vcr: ViewContainerRef,
        private readonly navigationBuilderVerticalService: NavigationBuilderVerticalService
    ) { }

    public visitButton(handler: NavigationBuilderDisplayButtonHandler): void {
        throw new Error("visitButton not implemented.");
    }

    public visitExpand(handler: NavigationBuilderDisplayExpandHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        componentRef.instance
            .expanded
            .subscribe((menu: IMenuItem) => {
                this.navigationBuilderVerticalService.setMenu(menu);
            });

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitLink(handler: NavigationBuilderDisplayLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitMenuDropdown(handler: NavigationBuilderDisplayMenuDropdownHandler): void {
        throw new Error("visitMenuDropdown not implemented.");
    }

    public visitText(handler: NavigationBuilderDisplayTextHandler): void {
        throw new Error("visitText not implemented.");
    }
}