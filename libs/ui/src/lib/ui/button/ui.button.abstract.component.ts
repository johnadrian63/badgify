import {
    Component,
    Input,
    OnInit
} from "@angular/core";
import { Subscription } from "rxjs";

import { UiTheme, buttonClassMapper } from "../ui.theme";
import { LoaderSpinnerColor } from "@org/loader";

@Component({
    template: ""
})
export abstract class UiButtonAbstractComponent implements OnInit {
    @Input() public icon!: string;
    @Input() public theme: keyof typeof UiTheme = UiTheme.DEFAULT;
    @Input() public busySubscription!: Subscription;
    @Input() public strict: boolean = false;
    @Input() public buttonClass!: string;
    @Input() public disabled: boolean = false;

    public get classes(): string {
        const classes: string[] = [];
        const buttonTheme = buttonClassMapper.get(this.theme);

        if (buttonTheme) {
            classes.push(buttonTheme);
        }


        if (this.buttonClass) {
            classes.push(this.buttonClass);
        }

        return classes.join(" ");
    }

    public get spinnerColor(): LoaderSpinnerColor {
        const spinnerColor = this.spinnerColorMapper.get(this.theme);

        if (spinnerColor) {
            return spinnerColor;
        }

        return LoaderSpinnerColor.WHITE;
    }

    private readonly spinnerColorMapper: Map<keyof typeof UiTheme, LoaderSpinnerColor> = new Map<keyof typeof UiTheme, LoaderSpinnerColor>([
        [UiTheme.DEFAULT, LoaderSpinnerColor.BLACK],
        [UiTheme.WHITE, LoaderSpinnerColor.GRAY],
    ]);

    public ngOnInit(): void {
        if (UiTheme[this.theme] === undefined) {
            throw new Error(`${this.theme} theme is not supported`);
        }
    }
}
