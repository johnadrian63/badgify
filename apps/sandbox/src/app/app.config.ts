import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { MOBILE_VIEWPORT_TOKEN, MOBILE_VIEWPORT_VALUE } from "@org/common";

import { appRoutes } from "./app.routes";

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(appRoutes),
        {
            provide: MOBILE_VIEWPORT_TOKEN,
            useValue: MOBILE_VIEWPORT_VALUE
        }
    ],
};
