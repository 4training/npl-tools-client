import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-introduction-dialog",
    templateUrl: "./introduction-dialog.component.html",
    styleUrls: ["./introduction-dialog.component.scss"],
})
export class IntroductionDialogComponent implements OnInit {
    public checked = false;
    constructor() {}

    ngOnInit() {
        this.checked = localStorage.getItem("showLeaveWarning") === "true";
    }

    public toggle({ checked }: { checked: boolean }): void {
        if (checked) {
            localStorage.setItem("showLeaveWarning", "true");
        } else {
            localStorage.setItem("showLeaveWarning", "false");
        }
    }
}
