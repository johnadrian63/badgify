import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UiLayoutHeader } from "./ui.layout.header";

describe("Header", () => {
    let component: UiLayoutHeader;
    let fixture: ComponentFixture<UiLayoutHeader>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UiLayoutHeader],
        }).compileComponents();

        fixture = TestBed.createComponent(UiLayoutHeader);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
