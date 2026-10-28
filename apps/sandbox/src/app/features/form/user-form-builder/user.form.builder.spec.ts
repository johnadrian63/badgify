import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UserFormBuilder } from "./user.form.builder";

describe("UserUserFormBuilder", () => {
    let component: UserFormBuilder;
    let fixture: ComponentFixture<UserFormBuilder>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UserFormBuilder],
        }).compileComponents();

        fixture = TestBed.createComponent(UserFormBuilder);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
