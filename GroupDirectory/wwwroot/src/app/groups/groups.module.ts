import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsListComponent } from './groups-list/groups-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GroupsListComponent],
  exports: [GroupsListComponent]
})
export class GroupsModule {}
