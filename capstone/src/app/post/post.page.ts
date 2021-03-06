import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app'
import * as firebase from 'firebase/app';

@Component({
	selector: 'app-post',
	templateUrl: './post.page.html',
	styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
	userId: any
	postID: string
	post
	url
	imageType
	postReference: AngularFirestoreDocument
	sub
	comments = []
	commentBox: string = ''

	heartType: string = "heart-empty"
	wasHere: string = "not-here"

	constructor(
		private route: ActivatedRoute, 
		private afs: AngularFirestore,
		private user: UserService) {

	}

	ngOnInit() {
		this.postID = this.route.snapshot.paramMap.get('id')
		this.postReference = this.afs.doc(`posts/${this.postID}`)
		this.sub = this.postReference.valueChanges().subscribe(val => {
			this.post = val
			this.url = val['url']
			this.userId = this.user.getUID();
			this.imageType = val['imageType']
			this.comments = val['comments'] || [];
			this.heartType = val.likes.includes(this.user.getUID()) ? 'heart' : 'heart-empty'
			this.wasHere = val.here.includes(this.user.getUsername()) ? 'here' : 'not-here'
		})
	}

	deleteComment(uid){
		let comments = this.comments;

		comments = comments.filter(comment => {
			return comment.uid != uid;
		})

		this.postReference.update({
			comments: this.comments
		}).then((res) => {
			this.comments = comments;
		})
	}

	submitComment(){
		let comment = this.commentBox;

		if(this.commentBox.trim() != ''){
			this.comments.push({uid: new Date().getTime(),"comment": comment, userId: this.user.getUID(), userName: this.user.getUsername()});

			this.postReference.update({
				comments: this.comments
			}).then((res) => {
				this.commentBox = '';
			})
		}
	}

	ngOnDestroy() {
		this.sub.unsubscribe()
	}

	toggleHeart() {
		if(this.heartType == 'heart-empty') {
			this.postReference.update({
				likes: firestore.FieldValue.arrayUnion(this.user.getUID())
			})
		} else {
			this.postReference.update({
				likes: firestore.FieldValue.arrayRemove(this.user.getUID())
			})
		}
	}

	toggleHere() {
		if(this.wasHere == 'not-here') {
			this.postReference.update({
				here: firestore.FieldValue.arrayUnion(this.user.getUsername())
			})
		} else {
			this.postReference.update({
				here: firestore.FieldValue.arrayRemove(this.user.getUsername())
			})
		}
	}

	whowasHere() {

	}

}
