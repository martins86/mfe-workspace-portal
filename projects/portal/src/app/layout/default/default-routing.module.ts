import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default.component';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from 'projects/portal/src/environments/environment';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: `${environment.mfeUrlDashBoard}remoteEntry.js`,
            remoteName: 'dashboard',
            exposedModule: './DashboardModule',
          })
            .then((m) => {
              return m.DashboardModule;
            })
            .catch((err) => console.log('Error: Load Children ', err)),
      },
      {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full',
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
