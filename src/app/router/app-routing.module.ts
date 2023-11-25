import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsbsComponent } from '../usbs/usbs.component';
import { JarComponent } from '../jar/jar.component';
import { UserComponent } from '../user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usbs', component: UsbsComponent },
  { path: 'jar', component: JarComponent },
  { path: 'users', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
