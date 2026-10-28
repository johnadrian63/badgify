import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Data, NavigationEnd, Router } from "@angular/router";
import { filter, map, mergeMap } from "rxjs";

@Component({
    template: ""
})
export class LayoutAbstract implements OnInit {
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private readonly router: Router = inject(Router);

    public ngOnInit(): void {
        this.router
            .events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((route: ActivatedRoute) => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }

                    return route;
                }),
                filter((route: ActivatedRoute) => {
                    return ["primary"].includes(route.outlet);
                }),
                mergeMap(route => route.data)
            ).subscribe((data: Data) => {
                console.log(data);
            });
    }
}
