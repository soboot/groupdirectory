import { Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { GroupsListComponent } from './groups/groups-list/groups-list.component';
import { ProfileComponent } from './users/profile/profile.component';

export const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'groups', component: GroupsListComponent },
  { path: 'profile', component: ProfileComponent }
];
