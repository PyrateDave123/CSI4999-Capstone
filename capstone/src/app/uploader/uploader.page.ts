import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import * as firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import 'firebase/storage';

@Component({
	selector: 'app-uploader',
	templateUrl: './uploader.page.html',
	styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

	imageURL: string
	desc: string
	noFace: boolean = false
	fullPath = '';
	myDate: string
	
	scaleCrop: string = '-/scale_crop/200x200'
	
	effects = {
		effect1: '',
		effect2: '-/exposure/50/-/saturation/50/-/warmth/-30/',
		effect3: '-/filter/vevera/150/',
		effect4: '-/filter/carris/150/',
		effect5: '-/filter/misiara/150/'
	}
	
	activeEffect: string = this.effects.effect1
	busy: boolean = false
	imageType:boolean = true

	@ViewChild('fileButton') fileButton

	constructor(
		public http: Http,
		public afstore: AngularFirestore,
		public user: UserService,
		private alertController: AlertController,
		private storage: AngularFireStorage, private db: AngularFirestore,

		private router: Router) { }

	ngOnInit() {
		
	}

	async createPost() {
		this.busy = true
		const myDate = this.myDate
		const image = this.imageURL
		const time = new Date().getTime();
		//const activeEffect = this.activeEffect
		const desc = this.desc

		this.afstore.doc(`users/${this.user.getUID()}`).update({
			posts: firestore.FieldValue.arrayUnion(`${time}`)
		})

		this.afstore.doc(`posts/${time}`).set({
			myDate,
			desc,
			author: this.user.getUsername(),
			likes: [],
			url: image,
			id: time,
			fullPath: this.fullPath,
			imageType: this.imageType
		})
		
		this.busy = false
		this.imageURL = ""
		this.desc = ""
		this.myDate = ""

		const alert = await this.alertController.create({
			header: 'Done',
			message: 'Your post was created!',
			buttons: ['Cool!']
		})

		await alert.present()

		this.router.navigate(['/tabs/feed'])
	}

	setSelected(effect: string) {
		this.activeEffect = this.effects[effect]
	}

	uploadFile() {
		this.fileButton.nativeElement.click()
	}

	pushUpload(file) {
		const path = `/posts/${Date.now()}_${file.name}`;

		// Reference to storage bucket
		let isImage = file.type.split('/')[0] == 'image';

		if(isImage){

			// For images, uploading to uploadcare service
			const data = new FormData();

			data.append('file', file)
			data.append('UPLOADCARE_STORE', '1')
			data.append('UPLOADCARE_PUB_KEY', 'ada5e3cb2da06dee6d82')
			
			this.http.post('https://upload.uploadcare.com/base/', data)
			.subscribe(event => {
				
				this.imageURL = event.json().file
				this.imageURL = `https://ucarecdn.com/${this.imageURL}/-/preview/`
				this.busy = false
				this.http.get(`${this.imageURL}/detect_faces/`)
				.subscribe(event => {
					this.noFace = event.json().faces == 0
				})
			})
		}else{
			// For other than image files, uploading to firebase storage
			const fileRef = this.storage.ref(path);
			let _this = this;

			let task:any = this.storage.upload(path, file).snapshotChanges().pipe(
				finalize(() => {
					fileRef.getDownloadURL().subscribe((url) => {
						_this.imageURL = url;
						_this.fullPath = url;
						_this.imageType = false;
						_this.busy = false;
					})
				})
			).subscribe();
		}
	}

	fileChanged(event) {
		
		this.busy = true
		const files = event.target.files

		let file = files[0];
		this.pushUpload(file)
	}
}
