import {
    Component,
    inject,
    Input,
    OnDestroy,
    OnInit
} from "@angular/core";
import { Data } from "@angular/router";

import { ILayoutStyleContextBuilderController } from "./layout.style.context.controller";
import { LayoutContextService } from "./layout.style.context.service";
import { ViewportService, MOBILE_VIEWPORT_TOKEN } from "@org/common";

@Component({
    template: ""
})
export abstract class LayoutStyleAbstractComponent implements OnInit, OnDestroy, ILayoutStyleContextBuilderController {
    @Input() public data!: Data;

    public get sidebarExpanded(): boolean {
        return this.layoutStyleContextService.sidebarExpanded;
    }

    public get isMobileViewport(): boolean {
        return this.viewportService.isMobileViewport(this.mobileViewportValue);
    }

    private baseControllerId!: number;

    protected readonly mobileViewportValue: string = inject<string>(MOBILE_VIEWPORT_TOKEN);
    protected readonly layoutStyleContextService: LayoutContextService = inject<LayoutContextService>(LayoutContextService);
    protected readonly viewportService: ViewportService = inject<ViewportService>(ViewportService);

    public ngOnInit(): void {
        this.baseControllerId = this.layoutStyleContextService.registerController(this);
    }

    public ngOnDestroy(): void {
        this.destroy();
    }

    public destroy(): void {
        this.layoutStyleContextService.unregisterController(this.baseControllerId);
    }

    public onSidebarExpand(expand: boolean): void {
        // do nothing
    }

    public contextLoading(): void {
        // do nothing
    }
}
