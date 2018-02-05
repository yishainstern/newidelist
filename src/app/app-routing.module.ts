import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'asset', loadChildren: 'app/features/asset/asset.module#AssetModule'},
  {path: 'map', loadChildren: 'app/features/map/map.module#MapModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
