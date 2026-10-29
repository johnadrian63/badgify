import { Route } from "@angular/router";
import { LayoutBuilderStyle } from "@org/layout-builder";

export const appRoutes: Route[] = [
    {
        path: "account",
        loadComponent: () => import("@org/cms/feature-account").then((c) => c.FeatureAccount),
        data: {
            layout: LayoutBuilderStyle.WITH_SIDEBAR
        }
    }
];
