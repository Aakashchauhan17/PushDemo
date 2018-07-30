"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var push_1 = require("kinvey-nativescript-sdk/push");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
kinvey_nativescript_sdk_1.Kinvey.init({
    appKey: "kid_HkWy-gTzX",
    appSecret: "c614df749bb447e1b54744dad24342e4",
});
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser()) {
            var promise = push_1.Push.register({
                android: {
                    senderID: '522442329219'
                },
                ios: {
                    alert: true,
                    badge: true,
                    sound: true
                }
            })
                .then(function (deviceToken) {
                // ...
            })
                .catch(function (error) {
                // ...
            });
            push_1.Push.onNotification(function (data) {
                // ...
            });
            // Init your component properties here.
        }
        else {
            kinvey_nativescript_sdk_1.Kinvey.User.login("admin", "admin").then(function () {
                var promise = push_1.Push.register({
                    android: {
                        senderID: '522442329219'
                    },
                    ios: {
                        alert: true,
                        badge: true,
                        sound: true
                    }
                })
                    .then(function (deviceToken) {
                    // ...
                })
                    .catch(function (error) {
                    // ...
                });
                push_1.Push.onNotification(function (data) {
                    // ...
                });
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxREFBaUQ7QUFDakQsbUVBQThDO0FBQzlDLGdDQUFNLENBQUMsSUFBSSxDQUFDO0lBQ1osTUFBTSxFQUFDLGVBQWU7SUFDdEIsU0FBUyxFQUFDLGtDQUFrQztDQUMzQyxDQUFDLENBQUM7QUFPSDtJQUVJO1FBQ0kscURBQXFEO0lBQ3pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsRUFBRSxDQUFBLENBQUMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQzlCLElBQU0sT0FBTyxHQUFHLFdBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzFCLE9BQU8sRUFBRTtvQkFDUCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBRSxJQUFJO29CQUNYLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0YsQ0FBQztpQkFDQyxJQUFJLENBQUMsVUFBQyxXQUFtQjtnQkFDeEIsTUFBTTtZQUNSLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFZO2dCQUNsQixNQUFNO1lBQ1IsQ0FBQyxDQUFDLENBQUM7WUFDSCxXQUFJLENBQUMsY0FBYyxDQUFDLFVBQUMsSUFBUztnQkFDMUIsTUFBTTtZQUNSLENBQUMsQ0FBQyxDQUFDO1lBQ1QsdUNBQXVDO1FBQ3ZDLENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNELGdDQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNwQyxJQUFNLE9BQU8sR0FBRyxXQUFJLENBQUMsUUFBUSxDQUFDO29CQUMxQixPQUFPLEVBQUU7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7cUJBQ3pCO29CQUNELEdBQUcsRUFBRTt3QkFDSCxLQUFLLEVBQUUsSUFBSTt3QkFDWCxLQUFLLEVBQUUsSUFBSTt3QkFDWCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRixDQUFDO3FCQUNDLElBQUksQ0FBQyxVQUFDLFdBQW1CO29CQUN4QixNQUFNO2dCQUNSLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFZO29CQUNsQixNQUFNO2dCQUNSLENBQUMsQ0FBQyxDQUFDO2dCQUNILFdBQUksQ0FBQyxjQUFjLENBQUMsVUFBQyxJQUFTO29CQUMxQixNQUFNO2dCQUNSLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQXBEUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FxRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UHVzaH0gZnJvbSAna2ludmV5LW5hdGl2ZXNjcmlwdC1zZGsvcHVzaCdcbmltcG9ydCB7S2ludmV5fSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIlxuS2ludmV5LmluaXQoe1xuYXBwS2V5Olwia2lkX0hrV3ktZ1R6WFwiLFxuYXBwU2VjcmV0OlwiYzYxNGRmNzQ5YmI0NDdlMWI1NDc0NGRhZDI0MzQyZTRcIixcbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgaWYoS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpKXtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IFB1c2gucmVnaXN0ZXIoe1xuICAgICAgICAgICAgYW5kcm9pZDoge1xuICAgICAgICAgICAgICBzZW5kZXJJRDogJzUyMjQ0MjMyOTIxOSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpb3M6IHtcbiAgICAgICAgICAgICAgYWxlcnQ6IHRydWUsXG4gICAgICAgICAgICAgIGJhZGdlOiB0cnVlLFxuICAgICAgICAgICAgICBzb3VuZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZGV2aWNlVG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgUHVzaC5vbk5vdGlmaWNhdGlvbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gLi4uXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgS2ludmV5LlVzZXIubG9naW4oXCJhZG1pblwiLFwiYWRtaW5cIikudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBQdXNoLnJlZ2lzdGVyKHtcbiAgICAgICAgICAgICAgICAgICAgYW5kcm9pZDoge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbmRlcklEOiAnNTIyNDQyMzI5MjE5J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpb3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBhbGVydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBiYWRnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBzb3VuZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGV2aWNlVG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgUHVzaC5vbk5vdGlmaWNhdGlvbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=