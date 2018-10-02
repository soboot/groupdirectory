import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UsersListComponent, ProfileComponent],
  exports: [UsersListComponent, ProfileComponent]
})
export class UsersModule {}
