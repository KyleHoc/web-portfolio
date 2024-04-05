/**
 * Title: app-routing.module.ts
 * Author: Kyle Hochdoerfer
 * Date: 3/31/24
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

// routes array with a path, component, and title for each route in the application (e.g. home, about, contact, etc.)
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Kyle Hochdoerfer: Portfolio' // title for the home page
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Kyle Hochdoerfer: Portfolio'
      },
      {
        path: 'resume',
        component: ResumeComponent,
        title: 'Kyle Hochdoerfer: Resume'
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Kyle Hochdoerfer: Contact'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: "Kyle Hochdoerfer: Projects"
      }
    ]
  }
];

@NgModule({
  // imports the RouterModule and defines the routes array and other options (e.g. useHash, enableTracing, scrollPositionRestoration)
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
