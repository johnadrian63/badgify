import { Injectable } from "@angular/core";
import { ContextBuilderService } from "@org/context-builder";

import { LayoutContextController } from "./layout.style.context.controller";
import { LayoutStyleContextDataLoader } from "./layout.style.context.data.loader";

@Injectable({
    providedIn: "root"
})
export class LayoutContextService extends ContextBuilderService<void> {

    public get sidebarExpanded(): boolean {
        return this._sidebarExpanded;
    }

    private _sidebarExpanded: boolean = true;

    protected override context: LayoutContextController = new LayoutContextController();
    protected override loader: LayoutStyleContextDataLoader = new LayoutStyleContextDataLoader();

    public async initialize(): Promise<void> {
        await this.load();
    }

    public sidebarExpand(expand: boolean): void {
        this._sidebarExpanded = expand;

        this.context.onSidebarExpand(expand);
    }
}
