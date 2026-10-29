import { Route } from "@angular/router";
import { LayoutBuilderSection, LayoutBuilderStyle } from "@org/layout-builder";

export const appRoutes: Route[] = [
    {
        path: "",
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "/form-test",
            },
            {
                path: "form-test",
                loadComponent: () => import("@org/sandbox/feature-form-test").then((c) => c.FeatureFormTest),
            },
            {
                path: "table-test",
                loadComponent: () => import("@org/sandbox/feature-table-test").then((c) => c.FeatureTableTest),
            },
            {
                path: "",
                outlet: LayoutBuilderSection.HEADER,
                loadComponent: () => import("@org/sandbox/ui-layout").then((c) => c.Header),
            }
        ],
        data: {
            layout: LayoutBuilderStyle.WITH_SIDEBAR
        }
    }
];
