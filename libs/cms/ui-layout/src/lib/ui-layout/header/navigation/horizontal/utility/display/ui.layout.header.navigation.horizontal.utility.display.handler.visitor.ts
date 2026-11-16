import { Type } from "@angular/core";
import { faUser, faCog, faDoorOpen, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { INavigationBuilderDisplayHandlerVisitor, NavigationBuilderDisplayHandler, NavigationBuilderDisplayLinkHandler, NavigationBuilderHorizontalDisplayHandlerVisitor } from "@org/navigation-builder";

import { UiLayoutHeaderNavigationHorizontalUtilityDisplayProfile } from "./profile/ui.layout.header.navigation.horizontal.utility.display.profile";

export interface IUiLayoutHeaderNavigationHorizontalUtilityDisplayHandler<T> extends INavigationBuilderDisplayHandlerVisitor<T> {
    visitProfile(handler: UiLayoutHeaderNavigationHorizontalUtilityDisplayHandler): T;
}

export class UiLayoutHeaderNavigationHorizontalUtilityDisplayHandler extends NavigationBuilderDisplayHandler {
    public readonly renderer: Type<UiLayoutHeaderNavigationHorizontalUtilityDisplayProfile> = UiLayoutHeaderNavigationHorizontalUtilityDisplayProfile;

    public accept<T>(visitor: IUiLayoutHeaderNavigationHorizontalUtilityDisplayHandler<T>): T {
        return visitor.visitProfile(this);
    }
}

export class UiLayoutHeaderNavigationHorizontalUtilityDisplayHandlerVisitor extends NavigationBuilderHorizontalDisplayHandlerVisitor implements IUiLayoutHeaderNavigationHorizontalUtilityDisplayHandler<void> {
    private readonly iconMapper: Map<string, IconDefinition> = new Map<string, IconDefinition>([
        ["profile", faUser],
        ["settings", faCog],
        ["logout", faDoorOpen],
    ]);

    public visitProfile(handler: UiLayoutHeaderNavigationHorizontalUtilityDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.menuClass = "mt-2.5";

        componentRef.changeDetectorRef.detectChanges();
    }

    public override visitLink(handler: NavigationBuilderDisplayLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        const icon = this.iconMapper.get(handler.menu.label);

        if (icon) {
            componentRef.instance.iconLeft = icon;
        }

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.changeDetectorRef.detectChanges();
    }
}

