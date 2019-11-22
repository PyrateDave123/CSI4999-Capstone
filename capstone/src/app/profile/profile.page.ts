import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
	selector: 'app-page',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	mainuser: AngularFirestoreDocument
	userPosts
	sub
	posts
	username: string
	profilePic: string
	friendlist: string

	constructor(private afs: AngularFirestore, private user: UserService, private router: Router, public fAuth: AngularFireAuth) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.posts = event.posts
			this.username = event.username
			this.profilePic = event.profilePic
			this.friendlist = event.friendlist
		})
	}

	logout() {
		this.fAuth.auth.signOut();
		this.router.navigate(['/login'])
	  }

	ngOnDestroy() {
		this.sub.unsubscribe()
	}

	goTo(postID: string) {

		this.router.navigate(['/tabs/post/' + postID.split('/')[0]])
	}

	ngOnInit() {
	}

}
