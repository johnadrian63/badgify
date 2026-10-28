import { Type } from "@angular/core";

import { LayoutStyle } from "./layout.style";
import { LayoutStyleAbstractComponent } from "./layout.style.abstract.component";
import { LayoutStyleWithoutSidebarComponent } from "./without-sidebar/layout.style.without.sidebar.component";
import { LayoutStyleNoLayoutComponent } from "./no-layout/layout.style.no.layout.component";
import { LayoutStyleTwoColumnsComponent } from "./two-columns/layout.style.two.columns.component";
import { LayoutStyleWithSidebarComponent } from "./with-sidebar/layout.style.with.sidebar.component";

export const layoutStyleMapper: Map<keyof typeof LayoutStyle, Type<LayoutStyleAbstractComponent>> = new Map<keyof typeof LayoutStyle, Type<LayoutStyleAbstractComponent>>([
    [LayoutStyle.NO_LAYOUT, LayoutStyleNoLayoutComponent],
    [LayoutStyle.WITH_SIDEBAR, LayoutStyleWithSidebarComponent],
    [LayoutStyle.WITHOUT_SIDEBAR, LayoutStyleWithoutSidebarComponent],
    [LayoutStyle.TWO_COLUMNS, LayoutStyleTwoColumnsComponent]
]);
