import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TableBuilder } from "./table-builder";

describe("UiTable", () => {
    let component: TableBuilder;
    let fixture: ComponentFixture<TableBuilder>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TableBuilder],
        }).compileComponents();

        fixture = TestBed.createComponent(TableBuilder);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
