import { CommonModule } from "@angular/common";
import {
    Component,
    Input,
    OnInit
} from "@angular/core";

export enum LoaderSpinnerSize {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}

export enum LoaderSpinnerColor {
    WHITE = "WHITE",
    GRAY = "GRAY",
    BLACK = "BLACK"
}

const loaderSpinnerSizeMapper: Map<keyof typeof LoaderSpinnerSize, string> = new Map<keyof typeof LoaderSpinnerSize, string>([
    [LoaderSpinnerSize.SMALL, "w-5 h-5 spinner-small"],
    [LoaderSpinnerSize.MEDIUM, "w-8 h-8 spinner-medium"],
    [LoaderSpinnerSize.LARGE, "w-12 h-12 spinner-large"]
]);

const loaderSpinnerColorMapper: Map<keyof typeof LoaderSpinnerColor, string> = new Map<keyof typeof LoaderSpinnerColor, string>([
    [LoaderSpinnerColor.WHITE, "spinner-white"],
    [LoaderSpinnerColor.GRAY, " spinner-gray"],
    [LoaderSpinnerColor.BLACK, " spinner-black"]
]);

@Component({
    selector: "lib-loader-spinner-component",
    template: `
        @if (spinnerClass.length > 0) {
            <div [ngClass]="spinnerClass" class="spinner"></div>
        }
   `,
    styleUrl: "./loader.spinner.component.scss",
    imports: [
        CommonModule
    ]
})
export class LoaderSpinnerComponent implements OnInit {
    @Input() public spinnerSize: keyof typeof LoaderSpinnerSize = LoaderSpinnerSize.MEDIUM;
    @Input() public spinnerColor: keyof typeof LoaderSpinnerColor = LoaderSpinnerColor.BLACK;

    public get spinnerClass(): string[] {
        const spinnerClasses: string[] = [];

        const spinnerSize = loaderSpinnerSizeMapper.get(this.spinnerSize);

        if (spinnerSize) {
            spinnerClasses.push(spinnerSize);
        }

        const spinnerColor = loaderSpinnerColorMapper.get(this.spinnerColor);
        if (spinnerColor) {
            spinnerClasses.push(spinnerColor);
        }

        return spinnerClasses;
    }

    public ngOnInit(): void {
        if (this.spinnerSize === undefined) {
            throw new Error("size input is required.");
        }

        if (loaderSpinnerSizeMapper.has(this.spinnerSize) === false) {
            throw new Error(`${this.spinnerSize} size is not supported.`);
        }

        if (loaderSpinnerColorMapper.has(this.spinnerColor) === false) {
            throw new Error(`${this.spinnerColor} size is not supported.`);
        }
    }
}
