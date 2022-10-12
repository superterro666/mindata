import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'hero',
        loadChildren: () => import('./modules/heros/heros.module').then(m => m.HerosModule)
    },
    {
        path: '',
        redirectTo: 'hero',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
