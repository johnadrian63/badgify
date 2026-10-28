import { Route } from "@angular/router";

import { formRoutes } from "./features/form/form.routes";

export const appRoutes: Route[] = [
    {
        path: "form",
        children: [
            ...formRoutes,
        ]
    }
];
