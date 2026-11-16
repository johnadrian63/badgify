import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CmsFeatureAuthentication } from "./feature.authentication";

describe("CmsFeatureAuthentication", () => {
    let component: CmsFeatureAuthentication;
    let fixture: ComponentFixture<CmsFeatureAuthentication>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CmsFeatureAuthentication],
        }).compileComponents();

        fixture = TestBed.createComponent(CmsFeatureAuthentication);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
