import {
    ComponentRef,
    Directive,
    ElementRef,
    inject,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewContainerRef
} from "@angular/core";
import { Subscription } from "rxjs";

import {
    LoaderSpinnerComponent,
    LoaderSpinnerColor,
    LoaderSpinnerSize
} from "./loader.spinner.component";

@Directive({
    selector: "[libLoaderBusyDirective]"
})
export class LoaderBusyDirective implements OnInit, OnChanges {
    @Input() public appLoaderBusyDirective!: Subscription;
    @Input() public disabled!: boolean;
    @Input() public spinnerColor: LoaderSpinnerColor = LoaderSpinnerColor.GRAY;

    private componentRef!: ComponentRef<LoaderSpinnerComponent>;
    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);
    private readonly elementRef: ElementRef = inject<ElementRef>(inject);

    public ngOnInit(): void {
        if (this.spinnerColor !== undefined && LoaderSpinnerColor[this.spinnerColor] === undefined) {
            throw new Error(`${this.spinnerColor} is not supported`);
        }

        this.loadSpinner();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        const subscription = changes["appLoaderBusyDirective"];

        if (subscription !== undefined && subscription.currentValue) {
            this.loadSpinner();
        } else {
            this.removeSpinner();
        }
    }

    private loadSpinner(): void {
        this.componentRef = this.vcr.createComponent(LoaderSpinnerComponent);

        this.componentRef.instance.spinnerSize = LoaderSpinnerSize.MEDIUM;
        this.componentRef.instance.spinnerColor = this.spinnerColor;

        const loaderElement = this.componentRef.location.nativeElement;
        const sibling = loaderElement.previousSibling;

        this.elementRef.nativeElement.style.position = "absolute";
        this.elementRef.nativeElement.style.height = "100%";
        this.elementRef.nativeElement.style.width = "100%";
        this.elementRef.nativeElement.style.display = "flex";
        this.elementRef.nativeElement.style.justifyContent = "center";
        this.elementRef.nativeElement.style.alignItems = "center";
        this.elementRef.nativeElement.style.top = 0;

        sibling.insertBefore(loaderElement, sibling.firstChild);
    }

    private removeSpinner(): void {
        if (this.componentRef) {
            this.elementRef.nativeElement.style = null;

            this.componentRef.destroy();
        }
    }
}
