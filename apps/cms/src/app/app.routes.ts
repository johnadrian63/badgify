import { Route } from "@angular/router";

export const appRoutes: Route[] = [
    {
        path: "account",
        loadComponent: () => import("@org/cms/feature-account").then((c) => c.FeatureAccount)
    }
];
