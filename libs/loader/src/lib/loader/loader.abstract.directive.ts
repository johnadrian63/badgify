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

@Directive()
export abstract class LoaderAbstractDirective implements OnInit, OnChanges {
    @Input() public libLoaderButtonDirective!: Subscription;
    @Input() public spinnerColor: LoaderSpinnerColor = LoaderSpinnerColor.WHITE;

    private componentRef!: ComponentRef<LoaderSpinnerComponent>;
    protected readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);
    protected readonly elementRef: ElementRef = inject<ElementRef>(ElementRef);

    public ngOnInit(): void {
        if (this.spinnerColor !== undefined && LoaderSpinnerColor[this.spinnerColor] === undefined) {
            throw new Error(`${this.spinnerColor} is not supported`);
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        const subscription = changes["libLoaderButtonDirective"];

        if (subscription?.previousValue === undefined && subscription?.currentValue === undefined) {
            return;
        }

        if (subscription !== undefined && subscription.currentValue) {
            this.handleSubscription(true);
        } else {
            this.handleSubscription(false);
        }
    }

    protected abstract handleSubscription(busy: boolean): void;

    protected loadSpinner(): void {
        this.componentRef = this.vcr.createComponent(LoaderSpinnerComponent);

        this.componentRef.instance.spinnerSize = LoaderSpinnerSize.SMALL;
        this.componentRef.instance.spinnerColor = this.spinnerColor;

        const loaderElement = this.componentRef.location.nativeElement;
        const sibling = loaderElement.previousSibling;

        loaderElement.classList.add("me-2");
        loaderElement.style.position = "absolute";
        loaderElement.style.left = "7px";

        this.elementRef.nativeElement.style.paddingLeft = "35px";
        this.elementRef.nativeElement.style.position = "relative";

        sibling.insertBefore(loaderElement, sibling.firstChild);
    }

    protected removeSpinner(): void {
        if (this.componentRef) {
            this.elementRef.nativeElement.style = null;

            this.componentRef.destroy();
        }
    }

    protected disable(disabled: boolean): void {
        this.elementRef.nativeElement.disabled = disabled;

        this.setDisabledClass(disabled);
    }

    private setDisabledClass(disabled: boolean): void {
        const disabledClass = "disabled:opacity-60";

        if (disabled) {
            this.elementRef.nativeElement.classList.add(disabledClass);
        } else {
            this.elementRef.nativeElement.classList.remove(disabledClass);
        }
    }
}
