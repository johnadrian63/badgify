import { Directive } from "@angular/core";

import { LoaderAbstractDirective } from "./loader.abstract.directive";

@Directive({
    selector: "[libLoaderButtonDirective]"
})
export class LoaderButtonDirective extends LoaderAbstractDirective {
    protected override handleSubscription(busy: boolean): void {
        if (busy === true) {
            this.loadSpinner();
            this.disable(true);
        } else {
            this.removeSpinner();
            this.disable(false);
        }
    }
}
