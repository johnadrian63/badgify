import { Component, inject } from "@angular/core"
import { FormBuilder, FormBuilderController, FormBuilderService } from "@org/form-builder";
import { UiButtonComponent } from "@org/ui"

import { UserFormBuilderService } from "./user.form.builder.service";

@Component({
    selector: "app-user-form-builder",
    templateUrl: "./user.form.builder.html",
    styleUrl: "./user.form.builder.css",
    imports: [
        FormBuilder,
        UiButtonComponent
    ],
    providers: [
        {
            provide: FormBuilderService,
            useExisting: UserFormBuilderService
        }
    ],
})
export class UserFormBuilder extends FormBuilderController {
    public override formBuilderService: FormBuilderService = inject(UserFormBuilderService);

}
