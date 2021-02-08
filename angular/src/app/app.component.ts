import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text = 'Hello from Arvia!';
  arviaChat: any;

  constructor() {
    this.arviaChat = new (<any>window).ArviaChat();
  }

  ngOnInit() {
  }

  onClick() {
    this.arviaChat.setTestUser(true);
    this.arviaChat.setRoomName('test-room-1');
    this.arviaChat.init('arvia.chat');
    this.arviaChat.connect();
  }

}
