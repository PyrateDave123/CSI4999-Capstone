import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions'
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  sub

  constructor(private aff: AngularFireFunctions) { }

  ngOnInit() {
    const getFeed = this.aff.httpsCallable('getfeed')
    getFeed({}).subscribe(data => {
      console.log(data)
    })
  }

  ngOnDestroy(){
    this.sub.unscribe()
  }

}
