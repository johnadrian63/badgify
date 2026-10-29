import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FeatureAccount } from "./feature-account";

describe("FeatureAccount", () => {
    let component: FeatureAccount;
    let fixture: ComponentFixture<FeatureAccount>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureAccount],
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureAccount);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
