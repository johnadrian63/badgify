import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavigationBuilderVertical } from "./navigation.builder.vertical";

describe("NavigationVerticalMenu", () => {
    let component: NavigationBuilderVertical;
    let fixture: ComponentFixture<NavigationBuilderVertical>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavigationBuilderVertical],
        }).compileComponents();

        fixture = TestBed.createComponent(NavigationBuilderVertical);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
