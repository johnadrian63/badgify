import {
    Component,
    inject,
    Input,
    OnChanges,
    SimpleChanges,
    ViewContainerRef
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
    Data,
    RouterModule
} from "@angular/router";

import { LayoutStyle } from "./layout.style";
import { layoutStyleMapper } from "./layout.style.mapper";
import { LayoutContextService } from "./layout.style.context.service";

@Component({
    selector: "lib-layout-style-resolver-component",
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
export class LayoutStyleResolverComponent implements OnChanges {
    @Input() public data!: Data;

    private readonly layoutStyleContextService: LayoutContextService = inject<LayoutContextService>(LayoutContextService);
    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);

    public ngOnChanges(changes: SimpleChanges): void {
        const layout = changes["data"]["currentValue"];

        if (layout) {
            this.initialize();
        }
    }

    private initialize(): void {
        let layout = LayoutStyle.WITHOUT_SIDEBAR;

        const hasLayout = layoutStyleMapper.has(this.data["layout"]);

        if (hasLayout) {
            layout = this.data["layout"];
        }

        this.vcr.clear();

        const component = layoutStyleMapper.get(layout);

        if (component) {
            const componentRef = this.vcr.createComponent(component);
            const componentInstance = componentRef.instance;

            componentInstance.data = this.data;

            componentRef.changeDetectorRef.detectChanges();
        }

        this.layoutStyleContextService.initialize();
    }
}
