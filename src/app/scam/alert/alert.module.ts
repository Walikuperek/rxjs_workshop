import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert/alert.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
    declarations: [
        AlertComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatTooltipModule
    ],
    exports: [
        AlertComponent
    ]
})
export class AlertModule {
}
