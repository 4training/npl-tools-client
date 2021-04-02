import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IntroductionDialogComponent } from "./introduction-dialog.component";

describe("IntroductionDialogComponent", () => {
    let component: IntroductionDialogComponent;
    let fixture: ComponentFixture<IntroductionDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IntroductionDialogComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IntroductionDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
