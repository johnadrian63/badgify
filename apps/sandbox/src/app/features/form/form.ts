import { Component, inject, OnInit } from "@angular/core";
import { UserFormBuilder } from "./user-form-builder/user.form.builder";
import { UserFormBuilderService } from "./user-form-builder/user.form.builder.service";
import { RouterLink, RouterModule } from "@angular/router";

@Component({
    selector: "app-form",
    imports: [UserFormBuilder, RouterLink],
    templateUrl: "./form.html",
    styleUrl: "./form.scss",
    providers: [
        RouterModule,
        UserFormBuilderService
    ]
})
export class Form implements OnInit {
    private readonly formBuilderService: UserFormBuilderService = inject(UserFormBuilderService);

    public ngOnInit(): void {
        this.formBuilderService.entityId = null;
    }
}
