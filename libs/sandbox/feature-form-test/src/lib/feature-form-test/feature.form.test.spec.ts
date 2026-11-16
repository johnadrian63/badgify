import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SandboxFeatureFormTest } from "./sandbox-feature-form-test";

describe("SandboxFeatureFormTest", () => {
    let component: SandboxFeatureFormTest;
    let fixture: ComponentFixture<SandboxFeatureFormTest>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SandboxFeatureFormTest],
        }).compileComponents();

        fixture = TestBed.createComponent(SandboxFeatureFormTest);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
