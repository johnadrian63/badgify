import {
    Component,
    Input
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { UiButtonAbstractComponent } from "./ui.button.abstract.component";

@Component({
    selector: "lib-ui-button-submit",
    templateUrl: "./ui.button.submit.component.html",
    styleUrl: "./ui.button.component.scss",
    imports: [
        CommonModule
    ]
})
export class UiButtonSubmitComponent extends UiButtonAbstractComponent {
    @Input() public targetForm!: FormGroup;
}
