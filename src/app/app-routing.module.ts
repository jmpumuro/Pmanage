import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantComponent } from './tenant/tenant.component';
import { TenantsComponent } from './tenants/tenants.component';
import{TenantListComponent} from './tenant-list/tenant-list.component';


const routes: Routes = [
  {path:"tenants", component:TenantsComponent},
  {path:"tenant", component:TenantComponent},
  {path:"tenant-list",component:TenantListComponent},
  


  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [TenantsComponent,TenantComponent];
