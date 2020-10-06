import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Guards */
import { AuthGuard } from '../guards/auth.guard';

/* Components */
import { TasksComponent } from './tasks/tasks.component';
import { LandingPageComponent } from './landing-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: LandingPageComponent, canActivate:[ AuthGuard ],
  children: [
      { path: '', component: DashboardComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'projects', component: ProjectsComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class PagesRoutingModule { }
