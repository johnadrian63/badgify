import { Routes } from "@angular/router";

export const formRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./form").then((c) => c.Form)
    }
];