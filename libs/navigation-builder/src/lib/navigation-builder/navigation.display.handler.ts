import { Type } from "@angular/core";

import { IMenuItem } from "./navigation.builder.model";
import { NavigationBuilderDisplay } from "./display/navigation.builder.display";
import { NavigationBuilderDisplayLink } from "./display/link/navigation.builder.display.link";
import { NavigationBuilderDisplayText } from "./display/text/navigation.builder.display.text";
import { NavigationBuilderDisplayButton } from "./display/button/navigation.builder.display.button";
import { NavigationBuilderDisplayExpand } from './display/expand/navigation.builder.display.expand';
import { NavigationBuilderDisplayMenuDropdown } from "./display/menu-dropdown/navigation.builder.display.menu.dropdown";

export interface INavigationBuilderDisplayHandlerVisitor<T> {
    visitButton(handler: NavigationBuilderDisplayButtonHandler): T;
    visitExpand(handler: NavigationBuilderDisplayExpandHandler): T;
    visitLink(handler: NavigationBuilderDisplayLinkHandler): T;
    visitMenuDropdown(handler: NavigationBuilderDisplayMenuDropdownHandler): T;
    visitText(handler: NavigationBuilderDisplayTextHandler): T;
}

/**
 * TODO: Refactor this code to call the component directly instead of using
 * an additional display handler class (NavigationBuilderDisplayHandler).
 * Main issue:
 * Extending NavigationBuilderDisplayHandler currently causes a type incompatibility issue
 * with the renderer property, especially when this class is inherited
 * by a subclass with a different renderer type.
 */
export abstract class NavigationBuilderDisplayHandler {
    constructor(public readonly menu: IMenuItem) { }

    public abstract renderer: Type<NavigationBuilderDisplay>;

    public abstract accept<T>(visitor: INavigationBuilderDisplayHandlerVisitor<T>): T;
}

export class NavigationBuilderDisplayButtonHandler extends NavigationBuilderDisplayHandler {
    public readonly renderer: Type<NavigationBuilderDisplayButton> = NavigationBuilderDisplayButton;

    public accept<T>(visitor: INavigationBuilderDisplayHandlerVisitor<T>): T {
        return visitor.visitButton(this);
    }
}

export class NavigationBuilderDisplayExpandHandler extends NavigationBuilderDisplayHandler {
    public readonly renderer: Type<NavigationBuilderDisplayExpand> = NavigationBuilderDisplayExpand;

    public accept<T>(visitor: INavigationBuilderDisplayHandlerVisitor<T>): T {
        return visitor.visitExpand(this);
    }
}

export class NavigationBuilderDisplayLinkHandler extends NavigationBuilderDisplayHandler {
    public readonly renderer: Type<NavigationBuilderDisplayLink> = NavigationBuilderDisplayLink;

    public accept<T>(visitor: INavigationBuilderDisplayHandlerVisitor<T>): T {
        return visitor.visitLink(this);
    }
}

export class NavigationBuilderDisplayMenuDropdownHandler extends NavigationBuilderDisplayHandler {
    public readonly renderer: Type<NavigationBuilderDisplayMenuDropdown> = NavigationBuilderDisplayMenuDropdown;

    public accept<T>(visitor: INavigationBuilderDisplayHandlerVisitor<T>): T {
        return visitor.visitMenuDropdown(this);
    }
}

export class NavigationBuilderDisplayTextHandler extends NavigationBuilderDisplayHandler {
    public readonly renderer: Type<NavigationBuilderDisplayText> = NavigationBuilderDisplayText;

    public accept<T>(visitor: INavigationBuilderDisplayHandlerVisitor<T>): T {
        return visitor.visitText(this);
    }
}
