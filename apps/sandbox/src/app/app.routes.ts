import { Route } from "@angular/router";
import { LayoutStyle } from "@org/layout-builder";

import { formRoutes } from "./features/form/form.routes";

export const appRoutes: Route[] = [
    {
        path: "",
        loadComponent: () => import("./features/default/default").then((c) => c.Default),
        data: {
            layout: LayoutStyle.NO_LAYOUT
        }
    },
    {
        path: "form",
        children: [
            ...formRoutes,
        ],
        data: {
            layout: LayoutStyle.WITH_SIDEBAR
        }
    }
];
