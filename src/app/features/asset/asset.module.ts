import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    AssetRoutingModule
  ],
  declarations: [MainComponent, EditComponent],
  providers: []
})
export class AssetModule { }
