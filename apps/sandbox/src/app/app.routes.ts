import { Route } from "@angular/router";

export const appRoutes: Route[] = [
    {
        path: "form-test",
        loadComponent: () => import("@org/sandbox/feature-form-test").then((c) => c.FeatureFormTest),
    }
];
