import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';


const routes: Routes = [
    {
        path: 'add',
        component: AddComponent,
    },
    {
        path: 'list',
        component: ListComponent,
    },
    {
        path: 'add/:name',
        component: AddComponent,
    },
    {
        path: '',
        redirectTo: 'add',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HerosRoutingModule { }
