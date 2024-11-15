import { Routes } from '@angular/router';

export let routes: Routes = [
    { path: '', redirectTo: 'cis/index', pathMatch: 'full' },
    { path: 'cis', loadChildren: () => import("./modules/cis/cis.module").then(x => x.CisModule) },
    { path: '**', redirectTo: 'cis/page-not-found' },
];
