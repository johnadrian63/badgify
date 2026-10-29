import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FeatureTableTest } from "./feature-table-test";

describe("FeatureTableTest", () => {
    let component: FeatureTableTest;
    let fixture: ComponentFixture<FeatureTableTest>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FeatureTableTest],
        }).compileComponents();

        fixture = TestBed.createComponent(FeatureTableTest);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
