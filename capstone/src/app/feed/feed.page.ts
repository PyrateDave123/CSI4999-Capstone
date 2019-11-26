import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  mainuser: AngularFirestoreDocument
	userPosts
	sub
	posts = []
	username: string
	profilePic: string

	constructor(private afs: AngularFirestore, private user: UserService, private router: Router) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)

		// Listing all the posts 
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			let posts = event.posts || [];
			let postsData = [];

			posts.forEach(post => {
				let postReference = this.afs.doc(`posts/${post}`)
				
				postReference.valueChanges().subscribe(val => {
				postsData.push({
					"postID": post,
					"url": val['url'],
					"imageType": val['imageType'] 
				})
			})
			});
			

			this.posts = postsData
			this.username = event.username
			this.profilePic = event.profilePic
		})
	}

	ngOnDestroy() {
		this.sub.unsubscribe()
	}

	goTo(postID: string) {
		this.router.navigate(['/tabs/post/' + postID])
	}

	ngOnInit() {
  }
}
