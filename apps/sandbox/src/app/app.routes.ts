import { Route } from "@angular/router";

import { formBuilderRoutes } from "./features/form-builder/form.builder.routes";

export const appRoutes: Route[] = [
    {
        path: "form-builder",
        children: [
            ...formBuilderRoutes,
        ]
    }
];
