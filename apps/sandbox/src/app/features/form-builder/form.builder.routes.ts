import { Routes } from "@angular/router";

export const formBuilderRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./form.builder").then((c) => c.FormBuilder)
    }
];