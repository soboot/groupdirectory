import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UsersModule, GroupsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
