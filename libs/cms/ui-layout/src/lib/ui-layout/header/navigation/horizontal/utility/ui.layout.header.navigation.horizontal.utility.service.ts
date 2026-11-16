import { Injectable, ViewContainerRef } from "@angular/core";
import { NavigationBuilderDisplayHandler, NavigationBuilderHorizontalService } from "@org/navigation-builder";

import { UiLayoutHeaderNavigationHorizontalUtilityDisplayHandlerVisitor } from "./display/ui.layout.header.navigation.horizontal.utility.display.handler.visitor";

@Injectable()
export class UiLayoutHeaderNavigationHorizontalUtilityService extends NavigationBuilderHorizontalService {
    public override handle(vcr: ViewContainerRef, handler: NavigationBuilderDisplayHandler): void {
        const visitor = new UiLayoutHeaderNavigationHorizontalUtilityDisplayHandlerVisitor(vcr);

        handler.accept(visitor);
    }
}