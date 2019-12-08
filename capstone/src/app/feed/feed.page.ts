import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Http } from '@angular/http'
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import 'firebase/storage';

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
	tags: string
	tag: string
	currentTag: any;
	

	constructor(private afs: AngularFirestore, public afstore: AngularFirestore, private user: UserService, private router: Router) {
		this.mainuser = afs.doc(`users/${user.getUID()}`)
		this.sub = this.mainuser.valueChanges().subscribe(event => {
			this.tags = event.tags
	
		// Listing all the posts 
		this.sub = this.afs.collection('posts').valueChanges().subscribe(posts => {
			let postsData = [];

			posts.forEach(post => {
			if (this.tags != ""){
			if (this.tags == post['tag']) {
				postsData.push({
					"postID": post['id'],
					"url": post['url'],
					"imageType": post['imageType'], 
					"myDate": post['myDate'],
					"desc": post['desc'],
					"tag": post['tag']
			})
		}
	}
		else {
			postsData.push({
				"postID": post['id'],
				"url": post['url'],
				"imageType": post['imageType'], 
				"myDate": post['myDate'],
				"desc": post['desc'],
				"tag": post['tag']
			})
		}
			});
			
			this.posts = postsData
		})
	
})
	}
	async updateTag() {
		this.afstore.doc(`users/${this.user.getUID()}`).update({
			tags: firestore.FieldValue.delete(),
	
			
			})
			this.afstore.doc(`users/${this.user.getUID()}`).update({
		
				tags: firestore.FieldValue.arrayUnion(`${this.tags}`)
				
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
