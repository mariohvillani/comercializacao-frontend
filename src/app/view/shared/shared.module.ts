import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoFieldModule, PoNotificationModule, PoPageModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoButtonModule,
    PoFieldModule,
    PoNotificationModule,
    PoPageModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PoButtonModule,
    PoFieldModule,
    PoNotificationModule,
    PoPageModule
  ]
})
export class SharedModule { }
