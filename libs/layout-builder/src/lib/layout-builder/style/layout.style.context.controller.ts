import { ContextBuilder, IContextBuilderBaseController } from "@org/context-builder";

export interface ILayoutStyleContextBuilderController extends IContextBuilderBaseController {
    onSidebarExpand(expand: boolean): void;
}

export class LayoutContextController extends ContextBuilder<ILayoutStyleContextBuilderController> implements ILayoutStyleContextBuilderController {
    public onSidebarExpand(expand: boolean): void {
        for (const controller of this.controllers) {
            controller.onSidebarExpand(expand);
        }
    }
}
