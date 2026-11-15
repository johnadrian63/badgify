import { Type, ViewContainerRef } from "@angular/core";

import { NavigationBuilderDisplayHandler } from "./navigation.display.handler";

export type IMenuItemTarget = "_blank" | "_self" | "_parent" | "_top";

export interface IMenuItem {
    label: string;
    text: string;
    path?: string | string[];
    target?: IMenuItemTarget;
    children?: IMenuItem[];
    handler?: Type<NavigationBuilderDisplayHandler>;
}

export interface IMenu {
    parent?: IMenuItem;
    children: IMenuItem[];
}


export interface INavigationBuilderHandlerService {
    handle(vcr: ViewContainerRef, handler: NavigationBuilderDisplayHandler): void;
}