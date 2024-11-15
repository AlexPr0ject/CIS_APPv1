import { Routes } from '@angular/router';

export let routes: Routes = [
    { path: '', redirectTo: 'cis/index', pathMatch: 'full' },
    { path: 'cis', loadChildren: () => import("./modules/cis/cis.module").then(x => x.CisModule) },
    { path: 'authentication', loadChildren: () => import("./modules/authentication/authentication.module").then(x => x.AuthenticationModule) },
    { path: '**', redirectTo: 'cis/page-not-found' },
];
