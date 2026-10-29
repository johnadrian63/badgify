import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FeatureFormTest } from "./feature-form-test";

describe("FeatureFormTest", () => {
    let component: FeatureFormTest;
    let fixture: ComponentFixture<FeatureFormTest>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureFormTest],
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureFormTest);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
