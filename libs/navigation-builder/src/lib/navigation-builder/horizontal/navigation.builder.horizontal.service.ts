import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { NavigationBuilderDisplayHandler } from "../navigation.display.handler";
import { IMenuItem, INavigationBuilderHandlerService } from "../navigation.builder.model";
import { NavigationBuilderHorizontalDisplayHandlerVisitor } from "./navigation.builder.horizontal.display.handler";

@Injectable()
export abstract class NavigationBuilderHorizontalService implements INavigationBuilderHandlerService {
    public readonly menus: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handle(vcr: ViewContainerRef, handler: NavigationBuilderDisplayHandler): void {
        const visitor = new NavigationBuilderHorizontalDisplayHandlerVisitor(vcr);

        handler.accept(visitor);
    }
}
