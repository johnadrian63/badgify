import { Component, OnDestroy, OnInit } from "@angular/core";

import { IFormBuilderController } from "./form.builder.interface";
import { FormBuilderService } from "./form.builder.service";

@Component({
    template: ""
})
export abstract class FormBuilderController implements IFormBuilderController, OnInit, OnDestroy {
    public abstract formBuilderService: FormBuilderService;

    public ngOnInit(): void {
        this.formBuilderService.register(this);
    }

    public submit(): void {
        this.formBuilderService.handleSubmit();
    }

    public ngOnDestroy(): void {
        this.formBuilderService.destroy();
    }
}