import { Routes } from '@angular/router';
import { Dashboard } from './Views/dashboard/dashboard';
import { Issues } from './Views/issues/issues';
import { Layout } from './Layout/layout/layout';
import { Chats } from './Views/Chats/chats';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: Layout,
        children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: Dashboard },
        { path: 'issue', component: Issues },
        { path: 'chats', component: Chats },
        ]
    }
    
];
