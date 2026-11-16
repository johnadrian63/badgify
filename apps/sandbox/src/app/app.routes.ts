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
                data: {
                    layout: LayoutBuilderStyle.WITHOUT_SIDEBAR
                }
            },
            {
                path: "table-test",
                loadComponent: () => import("@org/sandbox/feature-table-test").then((c) => c.FeatureTableTest),
                data: {
                    layout: LayoutBuilderStyle.WITHOUT_SIDEBAR
                }
            },
            {
                path: "",
                outlet: LayoutBuilderSection.HEADER,
                loadComponent: () => import("@org/sandbox/ui-layout").then((c) => c.UiLayoutHeader),
            },
            {
                path: "",
                outlet: LayoutBuilderSection.FOOTER,
                loadComponent: () => import("@org/sandbox/ui-layout").then((c) => c.UiLayoutFooter),
            },
            {
                path: "**",
                loadComponent: () => import("@org/sandbox/feature-error-page").then((c) => c.FeatureErrorPageNotFound),
                data: {
                    layout: LayoutBuilderStyle.WITHOUT_SIDEBAR
                }
            }
        ],
        data: {
            layout: LayoutBuilderStyle.WITH_SIDEBAR
        }
    }
];
