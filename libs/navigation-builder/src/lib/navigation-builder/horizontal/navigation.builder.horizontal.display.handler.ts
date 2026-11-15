import { Type, ViewContainerRef } from "@angular/core";

import { NavigationBuilderHorizontalDropdown } from "./dropdown/navigation.builder.horizontal.dropdown";
import { NavigationBuilderDisplayHandler, INavigationBuilderDisplayHandlerVisitor, NavigationBuilderDisplayButtonHandler, NavigationBuilderDisplayExpandHandler, NavigationBuilderDisplayLinkHandler, NavigationBuilderDisplayMenuDropdownHandler, NavigationBuilderDisplayTextHandler } from "../navigation.display.handler";

export interface INavigationBuilderHorizontalDisplayHandlerVisitor<T> extends INavigationBuilderDisplayHandlerVisitor<T> {
    visitCdkDropdown(handler: NavigationBuilderHorizontalDropdownDisplayHandler): T;
}

export class NavigationBuilderHorizontalDropdownDisplayHandler extends NavigationBuilderDisplayHandler {
    public readonly renderer: Type<NavigationBuilderHorizontalDropdown> = NavigationBuilderHorizontalDropdown;

    public accept<T>(visitor: INavigationBuilderHorizontalDisplayHandlerVisitor<T>): T {
        return visitor.visitCdkDropdown(this);
    }
}

export class NavigationBuilderHorizontalDisplayHandlerVisitor implements INavigationBuilderHorizontalDisplayHandlerVisitor<void> {
    constructor(protected readonly vcr: ViewContainerRef) { }

    public visitCdkDropdown(handler: NavigationBuilderHorizontalDropdownDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitButton(handler: NavigationBuilderDisplayButtonHandler): void {
        throw new Error("visitButton not implemented.");
    }

    public visitExpand(handler: NavigationBuilderDisplayExpandHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitLink(handler: NavigationBuilderDisplayLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitMenuDropdown(handler: NavigationBuilderDisplayMenuDropdownHandler): void {
        throw new Error("visitMenuDropdown not implemented.");
    }

    public visitText(handler: NavigationBuilderDisplayTextHandler): void {
        throw new Error("visitText not implemented.");
    }
}