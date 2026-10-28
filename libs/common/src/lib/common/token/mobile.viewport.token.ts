import { InjectionToken } from "@angular/core";

export const MOBILE_VIEWPORT_VALUE: string = "(min-width: 768px)";

export const MOBILE_VIEWPORT_TOKEN = new InjectionToken<string>("Mobile view port token limit");
