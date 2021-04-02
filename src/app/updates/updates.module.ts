import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IntroductionDialogComponent } from "./introduction-dialog/introduction-dialog.component";
import { SharedModule } from "@shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UpdatesComponent } from "./updates/updates.component";
import { UpdatesService } from "./updates.service";

@NgModule({
    declarations: [IntroductionDialogComponent, UpdatesComponent],
    exports: [UpdatesComponent],
    entryComponents: [IntroductionDialogComponent],
    imports: [CommonModule, SharedModule, FlexLayoutModule],
    providers: [UpdatesService],
})
export class UpdatesModule {}
