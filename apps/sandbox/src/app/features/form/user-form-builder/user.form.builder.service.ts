import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilderService } from "@org/form-builder";

@Injectable()
export class UserFormBuilderService extends FormBuilderService {
    public override entityId!: string | null;

    public override formGroup: FormGroup = new FormGroup({
        firstName: new FormControl()
    });

    public override handleInit(): void {
        throw new Error("Method not implemented.");
    }

    public override handleView(): void {
        throw new Error("Method not implemented.");
    }

    public override destroy(): void {
        console.log("destroy user form builder");
    }

    public override handleSubmit(): void {
        throw new Error("handleSubmit Method not implemented.");
    }

    public override handleUpdate(): void {
        throw new Error("handleUpdate Method not implemented.");
    }
}