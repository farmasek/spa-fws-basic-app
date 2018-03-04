import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GithubService } from "./app.service";

@Component({
  selector: "app-following",
  template: `
    <div>
     <h1> Following users</h1>
      <div class="cardsHolder" *ngFor="let user of followingUsers">
        <div class="card followingCard">
          <img width="100px" height="100px" src="{{user.avatar_url}}" />
          <h4>{{user.login}}</h4>
        </div>
      </div>
    </div>
  `,
  styles: [
    `.followingCard{
    display: inline-flex;
    width: 100%;
  }
  .followingCard h4{
    padding:1em;
  }`
  ]
})
export class FollowingComponent implements OnInit {
  followingUsers: Object;
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit() {
    this.getFollowingUsers();
  }

  getFollowingUsers(): void {
    this.githubService
      .getUserFollowings(this.route.snapshot.paramMap.get("login"))
      .subscribe(followingUsers => (this.followingUsers = followingUsers));
  }
}

