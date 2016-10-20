import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { UiKitPage } from '../pages/ui-kit/ui-kit';

import { PopoverPage } from '../pages/ui-kit/components/popover';
import { ModalsContentPage } from '../pages/ui-kit/components/modal';

import { GithubUsers } from '../providers/github-users';


@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    UserDetailsPage,
    ReposPage,
    OrganizationsPage,
    UiKitPage,
    PopoverPage,
    ModalsContentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    UserDetailsPage,
    ReposPage,
    OrganizationsPage,
    UiKitPage,
    PopoverPage,
    ModalsContentPage
  ],
  providers: [GithubUsers]
})
export class AppModule {}
