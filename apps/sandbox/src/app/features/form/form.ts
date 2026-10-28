import { Component } from "@angular/core";
import { UserFormBuilder } from "./user-form-builder/user.form.builder";

@Component({
    selector: "app-form",
    imports: [UserFormBuilder],
    templateUrl: "./form.html",
    styleUrl: "./form.scss",
})
export class Form { }
