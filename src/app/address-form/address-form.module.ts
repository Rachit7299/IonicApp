import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddressFormPage } from './address-form.page';

const routes: Routes = [
  {
    path: '',
    component: AddressFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddressFormPage]
})
export class AddressFormPageModule {}
