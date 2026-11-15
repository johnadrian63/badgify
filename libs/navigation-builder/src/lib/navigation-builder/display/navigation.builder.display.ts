import { Component, model } from "@angular/core";

import { IMenuItem } from "../navigation.builder.model";

@Component({
    template: ""
})
export abstract class NavigationBuilderDisplay {
    public readonly menu = model.required<IMenuItem>();

    public classes: string = "";
}