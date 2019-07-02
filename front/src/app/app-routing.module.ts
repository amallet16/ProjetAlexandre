import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CategoryComponent } from './category/category.component';
import { ContributeComponent } from './contribute/contribute.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'project/:id',
        component: ProjectComponent
    },
    {
        path: 'formulaire',
        component: FormulaireComponent
    },
    {
        path: 'contribute/:id',
        component: ContributeComponent
    },
    {
        path: 'category/:id',
        component: CategoryComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
