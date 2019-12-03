import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-uploader',
	templateUrl: './uploader.page.html',
	styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {
	myDate: string
	imageURL: string
	desc: string
	noFace: boolean = false
	
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

	@ViewChild('fileButton') fileButton

	constructor(
		public http: Http,
		public afstore: AngularFirestore,
		public user: UserService,
		private alertController: AlertController,
		private router: Router) { }

	ngOnInit() {
	}

	async createPost() {
		this.busy = true

		const myDate = this.myDate
		const image = this.imageURL
		const activeEffect = this.activeEffect
		const desc = this.desc

		this.afstore.doc(`users/${this.user.getUID()}`).update({
			posts: firestore.FieldValue.arrayUnion(`${image}/${activeEffect}`)
		})

		this.afstore.doc(`posts/${image}`).set({
			myDate,
			desc,
			author: this.user.getUsername(),
			likes: [],
			here: [],
			effect: activeEffect
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

	fileChanged(event) {
		
		this.busy = true

		const files = event.target.files
		
		const data = new FormData()
		data.append('file', files[0])
		data.append('UPLOADCARE_STORE', '1')
		data.append('UPLOADCARE_PUB_KEY', '283443521fd7e92477a5')
		
		this.http.post('https://upload.uploadcare.com/base/', data)
		.subscribe(event => {
			console.log(event)
			this.imageURL = event.json().file
			this.busy = false
			this.http.get(`https://ucarecdn.com/${this.imageURL}/detect_faces/`)
			.subscribe(event => {
				this.noFace = event.json().faces == 0
			})
		})
	}

}
