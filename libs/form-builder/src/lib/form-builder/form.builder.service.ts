import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { IFormBuilderController, IFormBuilderService } from "./form.builder.interface";

@Injectable()
export abstract class FormBuilderService implements IFormBuilderService {
    public abstract entityId: string | null;
    public abstract formGroup: FormGroup;

    public abstract handleInit(): void;
    public abstract handleSubmit(): void;
    public abstract handleUpdate(): void;
    public abstract handleView(): void
    public abstract destroy(): void;

    private controller!: IFormBuilderController;

    public register(controller: IFormBuilderController): void {
        if (!this.controller) {
            this.controller = controller;
        }
    }

    public submit(): void {
        if (this.entityId) {
            this.handleUpdate();
        } else {
            this.handleSubmit();
        }
    }
}