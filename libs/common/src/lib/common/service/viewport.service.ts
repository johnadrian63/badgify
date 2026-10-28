import { inject, Injectable } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";

@Injectable({
    providedIn: "root"
})
export class ViewportService {
    private readonly mediaMatcher: MediaMatcher = inject(MediaMatcher);

    public isMobileViewport(viewport: string): boolean {
        const media = this.mediaMatcher.matchMedia(viewport);

        return media.matches === false;
    }
}
