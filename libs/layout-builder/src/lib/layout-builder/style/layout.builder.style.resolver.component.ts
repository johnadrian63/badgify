import {
    Component,
    effect,
    inject,
    input,
    InputSignal,
    ViewContainerRef
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
    Data,
    RouterModule
} from "@angular/router";

import { LayoutBuilderStyle } from "./layout.builder.style";
import { layoutBuilderStyleMapper } from "./layout.builder.style.mapper";
import { LayoutBuilderContextService } from "./layout.builder.style.context.service";

@Component({
    selector: "lib-layout-builder-style-resolver-component",
    template: "",
    styles: [
        `
            :host {
                display: none;
            }
        `
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class LayoutBuilderStyleResolverComponent {
    public data: InputSignal<Data | null> = input<Data | null>(null);

    private readonly layoutStyleContextService: LayoutBuilderContextService = inject<LayoutBuilderContextService>(LayoutBuilderContextService);
    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);

    constructor() {
        effect(() => {
            const data = this.data();

            this.initialize(data);
        });
    }

    private initialize(data: Data | null): void {
        const layout = LayoutBuilderStyle.WITHOUT_SIDEBAR;

        let component = layoutBuilderStyleMapper.get(layout);

        if (data) {
            const currentComponent = layoutBuilderStyleMapper.get(data["layout"]);

            if (currentComponent) {
                component = currentComponent;
            }
        }

        this.vcr.clear();


        if (component) {
            const componentRef = this.vcr.createComponent(component);
            const componentInstance = componentRef.instance;

            componentInstance.data = this.data;

            componentRef.changeDetectorRef.detectChanges();
        }

        this.layoutStyleContextService.initialize();
        console.log("rendering layout style..");
    }
}
