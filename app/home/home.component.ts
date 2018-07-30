import { Component, OnInit } from "@angular/core";
import {Push} from 'kinvey-nativescript-sdk/push'
import {Kinvey} from "kinvey-nativescript-sdk"
Kinvey.init({
appKey:"kid_HkWy-gTzX",
appSecret:"c614df749bb447e1b54744dad24342e4",
});

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
      if(Kinvey.User.getActiveUser()){
        const promise = Push.register({
            android: {
              senderID: '522442329219'
            },
            ios: {
              alert: true,
              badge: true,
              sound: true
            }
          })
            .then((deviceToken: string) => {
              // ...
            })
            .catch((error: Error) => {
              // ...
            });
            Push.onNotification((data: any) => {
                // ...
              });
        // Init your component properties here.
        }
        else{
            Kinvey.User.login("admin","admin").then(()=>{
                const promise = Push.register({
                    android: {
                      senderID: '522442329219'
                    },
                    ios: {
                      alert: true,
                      badge: true,
                      sound: true
                    }
                  })
                    .then((deviceToken: string) => {
                      // ...
                    })
                    .catch((error: Error) => {
                      // ...
                    });
                    Push.onNotification((data: any) => {
                        // ...
                      });
            })
        }
    }
}
