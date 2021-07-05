import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'inventory', 
loadChildren : () => import('./inventory/inventory.module').then(module => module.InventoryModule)},
{path : '', redirectTo:'/inventory', pathMatch : 'full'},
{path : '**', redirectTo: '/inventory'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
