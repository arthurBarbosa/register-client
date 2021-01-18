import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCreateComponent } from './views/client/client-create/client-create.component';
import { ClientDeleteComponent } from './views/client/client-delete/client-delete.component';
import { ClientUpdateComponent } from './views/client/client-update/client-update.component';
import { ClientComponent } from './views/client/client.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'clients/create', component: ClientCreateComponent},
  { path: 'clients/update/:id', component: ClientUpdateComponent},
  { path: 'clients/delete/:id', component: ClientDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
