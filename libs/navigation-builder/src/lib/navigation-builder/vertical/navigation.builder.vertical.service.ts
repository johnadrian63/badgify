import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { NavigationBuilderDisplayHandler } from "../navigation.display.handler";
import { IMenu, IMenuItem, INavigationBuilderHandlerService } from "../navigation.builder.model";
import { NavigationBuilderVerticalDisplayHandler } from "./navigation.builder.vertical.display.handler";

@Injectable()
export abstract class NavigationBuilderVerticalService implements INavigationBuilderHandlerService {

    public get menu(): IMenu {
        const selectedMenus = this._selectedMenus();

        return selectedMenus[selectedMenus.length - 1];
    }

    public get selectedMenus(): IMenu[] {
        return this._selectedMenus();
    }

    public readonly menus: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);
    public readonly isVisible: WritableSignal<boolean> = signal<boolean>(true);

    private readonly _selectedMenus = signal<IMenu[]>([]);

    public handle(vcr: ViewContainerRef, handler: NavigationBuilderDisplayHandler): void {
        handler.accept(new NavigationBuilderVerticalDisplayHandler(vcr, this));
    }

    public setMenu(menu: IMenuItem | undefined): void {
        this.animate();

        this._selectedMenus.update((menus) => {
            menus.push({
                parent: menu,
                children: menu?.children ?? []
            });

            return menus;
        });
    }

    public back(): void {
        this.animate();

        this._selectedMenus.update((menus: IMenu[]) => {
            menus.pop();

            return menus;
        });
    }

    public animate(): void {
        this.isVisible.set(false);

        setTimeout(() => {
            this.isVisible.set(true);
        }, 90);
    }

    public reset(): void {
        this._selectedMenus.set([]);
    }
}
