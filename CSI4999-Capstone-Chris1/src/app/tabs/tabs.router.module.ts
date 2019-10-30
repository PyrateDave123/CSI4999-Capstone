import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'login',
				children: [
				  {
					path: '',
					loadChildren: () =>
					  import('../login/login.module').then(m => m.LoginPageModule)
				  }
				]
			  },
			{
				path: 'feed',
				children: [
				  {
					path: '',
					loadChildren: () =>
					  import('../feed/feed.module').then(m => m.FeedPageModule)
				  }
				]
			  },
			  {
				path: 'uploader',
				children: [
				  {
					path: '',
					loadChildren: () =>
					  import('../uploader/uploader.module').then(m => m.UploaderPageModule)
				  }
				]
			  },
			  {
				path: 'profile',
				children: [
				  {
					path: '',
					loadChildren: () =>
					  import('../profile/profile.module').then(m => m.ProfilePageModule)
				  }
				]
			  },
			  {
				path: 'post/:id',
				children: [
				  {
					path: '',
					loadChildren: () =>
					  import('../post/post.module').then(m => m.PostPageModule)
				  }
				]
			  },
			  {
				path: 'edit-profile',
				children: [
				  {
					path: '',
					loadChildren: () =>
					  import('../edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
				  }
				]
			  },
		]
	}	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule { }