import { Route } from "@angular/router";
import { LayoutBuilderSection, LayoutBuilderStyle } from "@org/layout-builder";

export const appRoutes: Route[] = [
    {
        path: "",
        children: [
            {
                path: "",
                redirectTo: "dashboard",
                pathMatch: "full"
            },
            {
                path: "dashboard",
                loadComponent: () => import("@org/cms/feature-dashboard").then((c) => c.FeatureDashboard),
                data: {
                    layout: LayoutBuilderStyle.WITH_SIDEBAR
                }
            },
            {
                path: "account",
                loadComponent: () => import("@org/cms/feature-account").then((c) => c.FeatureAccount),
                data: {
                    layout: LayoutBuilderStyle.WITH_SIDEBAR
                }
            },
            {
                path: "",
                outlet: LayoutBuilderSection.HEADER,
                loadComponent: () => import("@org/cms/ui-layout").then((c) => c.UiLayoutHeader),
            },
            {
                path: "",
                outlet: LayoutBuilderSection.FOOTER,
                loadComponent: () => import("@org/cms/ui-layout").then((c) => c.UiLayoutFooter),
            },
            // {
            //     path: "**",
            //     loadComponent: () => import("@org/cms/feature-error-page").then((c) => c.FeatureErrorPageNotFound),
            //     data: {
            //         layout: LayoutBuilderStyle.WITHOUT_SIDEBAR
            //     }
            // }
        ],
        data: {
            layout: LayoutBuilderStyle.WITH_SIDEBAR
        }
    }
];
