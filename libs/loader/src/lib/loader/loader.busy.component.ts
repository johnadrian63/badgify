import {
    Component,
    Input,
    OnChanges,
    SimpleChanges,
    ChangeDetectorRef,
    ElementRef,
    inject
} from "@angular/core";
import { Subscription } from "rxjs";

import {
    LoaderSpinnerColor,
    LoaderSpinnerComponent,
    LoaderSpinnerSize
} from "./loader.spinner.component";

@Component({
    selector: "lib-loader-busy-component",
    templateUrl: "./loader.busy.component.html",
    styleUrl: "./loader.busy.component.scss",
    imports: [
        LoaderSpinnerComponent
    ]
})
export class LoaderBusyComponent implements OnChanges {
    @Input() public showOverlay: boolean = true;
    @Input() public busySubscription!: Subscription;
    @Input() public spinnerColor: keyof typeof LoaderSpinnerColor = LoaderSpinnerColor.GRAY;
    @Input() public spinnerSize: keyof typeof LoaderSpinnerSize = LoaderSpinnerSize.MEDIUM;

    private readonly componentClass = [
        "absolute",
        "top-0",
        "left-0",
        "h-full",
        "w-full",
        "flex",
        "items-center",
        "justify-center"
    ];

    private readonly cdr: ChangeDetectorRef = inject<ChangeDetectorRef>(ChangeDetectorRef);
    private readonly elementRef: ElementRef = inject<ElementRef>(ElementRef);

    constructor() {
        this.elementRef.nativeElement.classList.add("hidden");
    }

    public ngOnChanges(changes: SimpleChanges): void {
        const busySubscription = changes["busySubscription"];

        if (busySubscription?.currentValue !== undefined) {
            if (busySubscription.currentValue) {
                this.elementRef.nativeElement.classList.add(...this.componentClass);
                this.elementRef.nativeElement.classList.remove("hidden");
            } else {
                this.elementRef.nativeElement.classList.remove(...this.componentClass);
                this.elementRef.nativeElement.classList.add("hidden");
            }
        }

        this.cdr.detectChanges();
    }
}
