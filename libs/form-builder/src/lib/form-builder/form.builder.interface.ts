import { FormGroup } from "@angular/forms";


export interface IFormBuilderController {
    formBuilderService: IFormBuilderService;
    submit(): void;
}

export interface IFormBuilderService {
    formGroup: FormGroup;
    handleInit(): void;
    handleSubmit(): void;
    handleView(): void;
    destroy(): void;
}