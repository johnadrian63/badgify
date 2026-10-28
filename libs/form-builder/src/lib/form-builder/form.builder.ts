import { Component, inject } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

import { FormBuilderAbstract } from "./form.builder.abstract";
import { FormBuilderService } from "./form.builder.service";

@Component({
    selector: "lib-form-builder",
    templateUrl: "./form.builder.html",
    imports: [
        ReactiveFormsModule
    ]
})
export class FormBuilder extends FormBuilderAbstract {

    public get formGroup(): FormGroup {
        return this.formBuilderService.formGroup;
    }

    private readonly formBuilderService: FormBuilderService = inject(FormBuilderService);


    public override submit(): void {
        this.formBuilderService.submit();
    }
}
