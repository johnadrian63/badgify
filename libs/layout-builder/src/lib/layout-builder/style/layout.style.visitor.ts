import { Data } from "@angular/router";
import {
    Renderer2,
    Type
} from "@angular/core";

import { LayoutStyle } from "./layout.style";
import { LayoutStyleAdapterNoLayout } from "./adapter/layout.style.adapter.no.layout";
import { LayoutStyleAdapterTwoColumns } from "./adapter/layout.style.adapter.two.columns";
import { LayoutStyleAdapterWithSidebar } from "./adapter/layout.style.adapter.with.sidebar";
import { LayoutStyleAdapterWithoutSidebar } from "./adapter/layout.style.adapter.without.sidebar";
import { LayoutStyleAdapterAbstract } from "./adapter/layout.style.adapter.abstract";
import {
    LayoutBodyBackgroundMode,
    layoutBodyClassMapper
} from "./layout.body.class.mapper";

export const layoutStyleAdapterMapper: Map<keyof typeof LayoutStyle, Type<LayoutStyleAdapterAbstract>> = new Map<keyof typeof LayoutStyle, Type<LayoutStyleAdapterAbstract>>([
    [LayoutStyle.NO_LAYOUT, LayoutStyleAdapterNoLayout],
    [LayoutStyle.WITH_SIDEBAR, LayoutStyleAdapterWithSidebar],
    [LayoutStyle.WITHOUT_SIDEBAR, LayoutStyleAdapterWithoutSidebar],
    [LayoutStyle.TWO_COLUMNS, LayoutStyleAdapterTwoColumns]
]);

export interface ILayoutStyleVisitor {
    visitNoLayout(adapter: LayoutStyleAdapterNoLayout): void;
    visitWithSidebar(adapter: LayoutStyleAdapterWithSidebar): void;
    visitWithSidebarV2(adapter: LayoutStyleAdapterWithSidebar): void;
    visitWithoutSidebar(adapter: LayoutStyleAdapterWithoutSidebar): void;
    visitTwoColumns(adapter: LayoutStyleAdapterTwoColumns): void;
}

export class LayoutStyleVisitor implements ILayoutStyleVisitor {
    constructor(
        private readonly renderer: Renderer2,
        private readonly document: Document,
        data: Data
    ) {
        const backgroundMode = this.getBackgroundMode(data["bodyBackgroundMode"])

        if (backgroundMode) {
            this.renderer.addClass(this.document.body, backgroundMode);
        }

        console.log("layout data:", data);
        console.log("background mode:", backgroundMode);
    }

    public visitNoLayout(adapter: LayoutStyleAdapterNoLayout): void {
        // do nothing
    }

    public visitWithSidebar(adapter: LayoutStyleAdapterWithSidebar): void {
        this.renderer.addClass(this.document.body, adapter.layoutClass);
    }

    public visitWithSidebarV2(adapter: LayoutStyleAdapterWithSidebar): void {
        this.renderer.addClass(this.document.body, adapter.layoutClass);
    }

    public visitWithoutSidebar(adapter: LayoutStyleAdapterWithoutSidebar): void {
        // do nothing
    }

    public visitTwoColumns(adapter: LayoutStyleAdapterTwoColumns): void {
        // do nothing
    }

    private getBackgroundMode(backgroundMode: LayoutBodyBackgroundMode): string {
        const layoutBodyClass = layoutBodyClassMapper.get(backgroundMode);

        return layoutBodyClass ?? "";
    }
}
