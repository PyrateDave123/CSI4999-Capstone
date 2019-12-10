import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

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
		//this.mainuser = afs.doc(`users/${user.getUID()}`)
		
		// Listing all the posts 
		this.sub = this.afs.collection('posts').valueChanges().subscribe(posts => {
			let postsData = [];

			posts.forEach(post => {
				postsData.push({
					"postID": post['id'],
					"url": post['url'],
					"imageType": post['imageType'], 
					"myDate": post['myDate'],
					"desc": post['desc']
			})
			});
			
			this.posts = postsData
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
