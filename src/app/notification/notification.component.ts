import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-notification',
  standalone: true,
  template: `<h2>Notification Page</h2>`
})
export class NotificationComponent implements OnInit {

  ngOnInit() {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl('http://10.0.2.69:5005/notificationHub?userId=600275')
      .withAutomaticReconnect()
      .build();

    connection.start()
      .then(() => console.log('✅ Connected'))
      .catch(err => console.error(err));

    connection.on('ReceiveNotification', (data) => {
      console.log('🔥 Notification:', data);
      alert(data.description);
    });
  }
}