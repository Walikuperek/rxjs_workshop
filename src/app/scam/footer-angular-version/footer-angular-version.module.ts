import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterAngularVersionComponent } from './footer-angular-version/footer-angular-version.component';



@NgModule({
    declarations: [
        FooterAngularVersionComponent
    ],
    exports: [
        FooterAngularVersionComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FooterAngularVersionModule { }
