import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { GoogleautoService} from '../../core/googleauto/googleauto.service';
import { MapService } from '../../core/map/map.service';
import { ContentComponent } from './content/content.component';
import { MapAreaComponent } from './map-area/map-area.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalqueryService } from '../../core/globalquery/globalquery.service';
@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    HttpClientModule
  ],
  providers: [GoogleautoService, MapService, GlobalqueryService],
  declarations: [HeaderComponent, MainComponent, ContentComponent, MapAreaComponent]
})
export class MapModule { }
